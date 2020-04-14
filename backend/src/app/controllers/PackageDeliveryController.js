import * as Yup from 'yup';
import { startOfHour, format, parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class PackageDeliveryController {
  async index(req, res) {
    const { id } = req.params;
    const { available, finished, canceled } = req.query;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Invalid deliveryman' });
    }

    if (!canceled && !finished) {
      const deliveries = await Delivery.findAll({
        where: {
          deliveryman_id: id,
          canceled_at: null,
          end_date: null,
        },
      });
      return res.json(deliveries);
    }

    if (available && (canceled || finished)) {
      return res.status(400).json({ error: 'Incompatible filters' });
    }
    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: canceled
          ? {
              [Op.ne]: null,
            }
          : null,
        end_date: finished
          ? {
              [Op.ne]: null,
            }
          : null,
      },
    });
    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Invalid deliveryman' });
    }

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: true,
      },
    });

    return res.json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { deliverymanId, deliveryId } = req.params;

    const { start_date, end_date, signature_id } = req.body;

    const parsedDate = parseISO(start_date);

    let delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(404).json({ error: 'Invalid delivery' });
    }
    if (delivery.deliveryman_id !== Number(deliverymanId)) {
      return res.status(401).json({
        error: 'Deliveryman not authorized to take this package',
      });
    }

    if (start_date) {
      const numberOfDailyDeliveries = await Delivery.findAll({
        where: {
          deliveryman_id: deliverymanId,
          start_date: {
            [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
          },
        },
      });
      if (numberOfDailyDeliveries.length >= 5) {
        return res
          .status(401)
          .json({ error: 'Maximum daily number of deliveries reached' });
      }

      const startHour = Number(format(startOfHour(parseISO(start_date)), 'H'));
      if (startHour < 8 || startHour >= 18) {
        return res.status(401).json({ error: 'Outside working hours' });
      }
    }

    delivery = await delivery.update({
      start_date: start_date || delivery.start_date,
      end_date: end_date || delivery.end_date,
      signature_id: signature_id || null,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      end_date: Yup.date().required(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid 'end_date' field" });
    }

    const { id } = req.params;
    let delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'Invalid delivery' });
    }

    const { end_date, signature_id } = req.body;

    if (end_date) {
      const startHour = Number(format(startOfHour(parseISO(end_date)), 'H'));
      if (startHour < 8 || startHour >= 18) {
        return res.status(401).json({ error: 'Outside working hours' });
      }
    }

    delivery = await delivery.update({
      end_date,
      signature_id: signature_id || null,
    });

    return res.json(delivery);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman not found' });
    }
    await deliveryman.destroy();
    return res.json({ error: 'Deliveryman deleted' });
  }
}

export default new PackageDeliveryController();
