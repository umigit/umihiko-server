import { Router } from 'express';
import { Auth } from './auth';
import { getAllTools, getTool, createTool, updateTool } from '../controllers/tools';

export const toolsRouter = Router();

toolsRouter.get('/', Auth, getAllTools);
toolsRouter.get('/:id', Auth, getTool);
toolsRouter.post('/', Auth, createTool);
toolsRouter.put('/:id', Auth, updateTool);
