import * as Yup from 'yup';
import Sequelize from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { q } = req.query;

    let recipients;

    if (q) {
      recipients = await Recipient.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: q,
          },
        },
      });
    } else {
      recipients = await Recipient.findAll();
    }

    return res.json(recipients);
  }

  async show(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found' });
    }
    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    const { name } = req.body;

    let recipient = await Recipient.findOne({ where: { name } });

    if (recipient) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip_code: Yup.string(),
    });

    const { id } = req.params;
    let recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid field(s)' });
    }

    recipient = await recipient.update(req.body);

    return res.json(recipient);
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found' });
    }
    await recipient.destroy();
    return res.json({ error: 'Recipient deleted' });
  }
}

export default new RecipientController();
