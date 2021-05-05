import { Sequelize, Options } from 'sequelize';
import { dbConfig } from './config';

export const sequelize = new Sequelize(
  dbConfig['development'].database,
  dbConfig['development'].username,
  dbConfig['development'].password,
  dbConfig['development'] as Options
);
