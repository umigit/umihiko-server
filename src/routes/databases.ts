import { Router } from 'express';
import { Auth } from './auth';
import {
  getAllDatabases,
  getDatabase,
  createDatabase,
  updateDatabase,
} from '../controllers/databases';

export const databasesRouter = Router();

databasesRouter.get('/', Auth, getAllDatabases);
databasesRouter.get('/:id', Auth, getDatabase);
databasesRouter.post('/', Auth, createDatabase);
databasesRouter.put('/:id', Auth, updateDatabase);
