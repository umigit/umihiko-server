import { Router } from 'express';
import { Auth } from './auth';
import {
  getAllOperatingSystems,
  getOperatingSystem,
  createOperatingSystem,
  updateOperatingSystem,
} from '../controllers/operating-systems';

export const operatingSystemsRouter = Router();

operatingSystemsRouter.get('/', Auth, getAllOperatingSystems);
operatingSystemsRouter.get('/:id', Auth, getOperatingSystem);
operatingSystemsRouter.post('/', Auth, createOperatingSystem);
operatingSystemsRouter.put('/:id', Auth, updateOperatingSystem);
