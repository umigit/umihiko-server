import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { User, Image } from '../models';

export async function getAllUsers(
  req: GetAllRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const range = req.query.range
    ? <number[]>JSON.parse(req.query.range)
    : [0, 100];
  const sort: Order = req.query.sort
    ? <Order>[JSON.parse(req.query.sort)]
    : [['id', 'ASC']];
  const from = range[0];
  const to = range[1];
  const limit = to - from + 1;

  const users = await User.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (users) {
    res.header('Content-Range', `${from}-${to}/${users.count}`);
    res.json(users.rows);
  }
}

export async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [
      {
        model: Image,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
      { model: Image, as: 'profileImage' },
    ],
  }).catch((err) => next(err));

  res.json(user);
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const user = await User.create(req.body).catch((err) => next(err));

  res.json(user);
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const user = await User.findByPk(req.params.id).catch((err) => next(err));

  if (user) {
    user.update(req.body).catch((err) => next(err));
    res.json(user);
  }
}
