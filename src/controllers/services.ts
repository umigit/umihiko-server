import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { Models } from '../models';

export async function getAllServices(
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

  const services = await Models.Service.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (services) {
    res.header('Content-Range', `${from}-${to}/${services.count}`);
    res.json(services.rows);
  }
}

export async function getService(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const service = await Models.Service.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  res.json(service);
}

export async function createService(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const service = await Models.Service.create(req.body).catch((err) =>
    next(err)
  );

  res.json(service);
}

export async function updateService(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const service = await Models.Service.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  if (service) {
    service.update(req.body).catch((err) => next(err));
    res.json(service);
  }
}
