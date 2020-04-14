import * as Yup from 'yup';
import Sequelize from 'sequelize';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import Queue from '../../lib/Queue';
import NewDeliveryMail from '../jobs/NewDeliveryMail';

class DeliveryController {
  async index(req, res) {
    const { q } = req.query;

    let deliveries;
    if (q) {
      deliveries = await Delivery.findAll({
        where: {
          product: {
            [Sequelize.Op.iLike]: q,
          },
        },
      });
    } else {
      deliveries = await Delivery.findAll();
    }

    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id, {
      attributes: { exclude: ['signature_id', 'path'] },
      include: [
        { model: File, as: 'signature' },
        { model: Recipient, as: 'recipient' },
        { model: Deliveryman, as: 'deliveryman' },
      ],
    });

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }
    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found' });
    }

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman not found' });
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    await Queue.add(NewDeliveryMail.key, {
      deliveryman,
      delivery,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      signature_id: Yup.number(),
      product: Yup.string(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { id } = req.params;

    let delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }

    const { recipient_id, deliveryman_id, signature_id } = req.body;

    if (recipient_id) {
      const recipient = Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.status(404).json({ error: 'Recipient not found' });
      }
    }

    if (deliveryman_id) {
      const deliveryman = Deliveryman.findByPk(deliveryman_id);
      if (!deliveryman) {
        return res.status(404).json({ error: 'Deliveryman not found' });
      }
    }

    if (signature_id) {
      const signature = File.findByPk(signature_id);
      if (!signature) {
        return res.status(404).json({ error: 'Signature not found' });
      }
    }

    delivery = await delivery.update(req.body);

    return res.json(delivery);
  }

  async delete(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }
    await delivery.destroy();
    return res.json({ error: 'Delivery deleted' });
  }
}

export default new DeliveryController();
