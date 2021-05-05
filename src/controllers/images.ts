import { Request, NextFunction, GetAllRequest, AuthResponse } from 'express';
import { Order } from 'sequelize';
import { Image } from '../models';

export async function getAllImages(
  req: GetAllRequest,
  res: AuthResponse,
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
  const user = res.locals.user;

  const images = await Image.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      userId: user.id,
    },
  }).catch((err) => next(err));

  if (images) {
    res.header('Content-Range', `${from}-${to}/${images.count}`);
    res.json(images.rows);
  }
}

export async function getImage(
  req: Request,
  res: AuthResponse,
  next: NextFunction
): Promise<void> {
  const user = res.locals.user;

  const image = await Image.findOne({
    where: {
      id: req.params.id,
      userId: user.id,
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  res.json(image);
}

export async function createImage(
  req: Request,
  res: AuthResponse,
  next: NextFunction
): Promise<void> {
  const user = res.locals.user;

  const image = await Image.create({
    ...req.body,
    userId: user,
  }).catch((err) => next(err));

  res.json(image);
}
