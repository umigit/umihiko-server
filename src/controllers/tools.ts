import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { Models } from '../models';

export async function getAllTools(
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

  const tools = await Models.Tool.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (tools) {
    res.header('Content-Range', `${from}-${to}/${tools.count}`);
    res.json(tools.rows);
  }
}

export async function getTool(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const tool = await Models.Tool.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  res.json(tool);
}

export async function createTool(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const tool = await Models.Tool.create(req.body).catch((err) => next(err));

  res.json(tool);
}

export async function updateTool(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const tool = await Models.Tool.findByPk(req.params.id).catch((err) =>
    next(err)
  );

  if (tool) {
    tool.update(req.body).catch((err) => next(err));
    res.json(tool);
  }
}
