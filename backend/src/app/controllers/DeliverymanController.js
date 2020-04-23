import * as Yup from 'yup';
import Sequelize from 'sequelize';
import File from '../models/File';

import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const { q } = req.query;

    let deliverymen;
    if (q) {
      deliverymen = await Deliveryman.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: q,
          },
        },
      });
    } else {
      deliverymen = await Deliveryman.findAll({
        attributes: { exclude: ['avatar_id'] },
        include: [{ model: File, as: 'avatar' }],
      });
    }

    return res.json(deliverymen);
  }

  async show(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: { exclude: ['avatar_id'] },
      include: [{ model: File, as: 'avatar' }],
    });

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman not found' });
    }
    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { email } = req.body;

    let deliveryman = await Deliveryman.findOne({ where: { email } });

    if (deliveryman) {
      return res.status(401).json({ error: 'Email already registered' });
    }

    deliveryman = await Deliveryman.create(req.body);
    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { id } = req.params;
    let deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman not found' });
    }

    const { name, email, avatar_id } = req.body;

    if (!name && !email && !avatar_id) {
      return res.status(400).json({ error: 'Nothing to update' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    deliveryman = await deliveryman.update(req.body);

    return res.json(deliveryman);
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

export default new DeliverymanController();
