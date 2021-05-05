import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { Models } from '../models';

export async function getAllOperatingSystems(
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

  const operatingSystems = await Models.OperatingSystem.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (operatingSystems) {
    res.header('Content-Range', `${from}-${to}/${operatingSystems.count}`);
    res.json(operatingSystems.rows);
  }
}

export async function getOperatingSystem(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const operatingSystem = await Models.OperatingSystem.findByPk(
    req.params.id
  ).catch((err) => next(err));

  res.json(operatingSystem);
}

export async function createOperatingSystem(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const operatingSystem = await Models.OperatingSystem.create(
    req.body
  ).catch((err) => next(err));

  res.json(operatingSystem);
}

export async function updateOperatingSystem(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const operatingSystem = await Models.OperatingSystem.findByPk(
    req.params.id
  ).catch((err) => next(err));

  if (operatingSystem) {
    operatingSystem.update(req.body).catch((err) => next(err));
    res.json(operatingSystem);
  }
}
