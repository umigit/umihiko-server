import { Router } from 'express';
import { Auth } from './auth';
import { getAllServices, getService, createService, updateService } from '../controllers/services';

export const servicesRouter = Router();

servicesRouter.get('/', Auth, getAllServices);
servicesRouter.get('/:id', Auth, getService);
servicesRouter.post('/', Auth, createService);
servicesRouter.put('/:id', Auth, updateService);
