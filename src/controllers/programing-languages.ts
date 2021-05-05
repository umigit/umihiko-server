import { Request, Response, NextFunction, GetAllRequest } from 'express';
import { Order } from 'sequelize';
import { Models } from '../models';

export async function getAllProgramingLanguages(
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

  const programingLanguages = await Models.ProgramingLanguage.findAndCountAll({
    offset: from,
    limit: limit,
    order: sort,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  }).catch((err) => next(err));

  if (programingLanguages) {
    res.header('Content-Range', `${from}-${to}/${programingLanguages.count}`);
    res.json(programingLanguages.rows);
  }
}

export async function getProgramingLanguage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const programingLanguage = await Models.ProgramingLanguage.findByPk(
    req.params.id
  ).catch((err) => next(err));

  res.json(programingLanguage);
}

export async function createProgramingLanguage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const programingLanguage = await Models.ProgramingLanguage.create(
    req.body
  ).catch((err) => next(err));

  res.json(programingLanguage);
}

export async function updateProgramingLanguage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const programingLanguage = await Models.ProgramingLanguage.findByPk(
    req.params.id
  ).catch((err) => next(err));

  if (programingLanguage) {
    programingLanguage.update(req.body).catch((err) => next(err));
    res.json(programingLanguage);
  }
}
