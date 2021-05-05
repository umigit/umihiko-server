import { Router } from 'express';
import { Auth } from './auth';
import {
  getAllFrameworks,
  getFramework,
  createFramework,
  updateFramework,
} from '../controllers/frameworks';

export const frameworksRouter = Router();

frameworksRouter.get('/', Auth, getAllFrameworks);
frameworksRouter.get('/:id', Auth, getFramework);
frameworksRouter.post('/', Auth, createFramework);
frameworksRouter.put('/:id', Auth, updateFramework);
