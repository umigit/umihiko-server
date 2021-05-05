import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { Framework } from '../models';

export async function getAllFrameworks(
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

  const frameworks = await Framework.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (frameworks) {
    res.header('Content-Range', `${from}-${to}/${frameworks.count}`);
    res.json(frameworks.rows);
  }
}

export async function getFramework(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const framework = await Framework.findByPk(req.params.id).catch((err) =>
    next(err)
  );
  res.json(framework);
}

export async function createFramework(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const framework = await Framework.create(req.body).catch((err) => next(err));
  res.json(framework);
}

export async function updateFramework(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const framework = await Framework.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  if (framework) {
    framework.update(req.body).catch((err) => next(err));
    res.json(framework);
  }
}
