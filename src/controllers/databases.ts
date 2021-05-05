import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Database } from '../models';
import { Order } from 'sequelize';

export async function getAllDatabases(
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
  const databases = await Database.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (databases) {
    res.header('Content-Range', `${from}-${to}/${databases.count}`);
    res.json(databases.rows);
  }
}

export async function getDatabase(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const database = await Database.findByPk(req.params.id).catch((err) =>
    next(err)
  );
  res.json(database);
}

export async function createDatabase(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const database = await Database.create(req.body).catch((err) => next(err));
  res.json(database);
}

export async function updateDatabase(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const database = await Database.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  if (database) {
    database.update(req.body).catch((err) => next(err));
    res.json(database);
  }
}
