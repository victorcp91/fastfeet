import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';
import Deliveryman from '../models/Deliveryman';

import CancellationMail from '../jobs/CancellationMail';

import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const problematicDeliveries = await DeliveryProblem.findAll({
      include: [{ model: Delivery, as: 'problematic_delivery' }],
    });

    return res.json(problematicDeliveries);
  }

  async show(req, res) {
    const { id } = req.params;

    const problems = await DeliveryProblem.findAll({
      where: {
        delivery_id: id,
      },
    });

    return res.json(problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Description required' });
    }

    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'Invalid delivery' });
    }

    const { description } = req.body;

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });

    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const { id } = req.params;
    let delivery = await Delivery.findByPk(id, {
      include: [{ model: Deliveryman, as: 'deliveryman' }],
    });

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }
    delivery = await delivery.update({
      canceled_at: new Date(),
    });

    await Queue.add(CancellationMail.key, {
      delivery,
    });

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();
