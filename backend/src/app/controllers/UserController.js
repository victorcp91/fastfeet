import User from '../models/User';

class UserController {
  async index(req, res) {
    let users = await User.findAll();
    users = users.map(user => {
      const { name, email } = user;
      return { name, email };
    });
    return res.json(users);
  }

  async show(req, res) {
    const id = req.userId;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { name, email, createdAt, updatedAt } = user;

    return res.json({ id, name, email, createdAt, updatedAt });
  }
}

export default new UserController();
