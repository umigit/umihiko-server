'use strict';

import { User } from '../models/index';

export default {
  async getAllUsers(req, res, next) {
    const users = await User.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.json(users);
  },

  async createUser(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.json(user.get());
    } catch (err) {
      next(err);
    }
  },
};
