import { Router } from 'express';
import { Auth } from './auth';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
} from '../controllers/users';

export const usersRouter = Router();

usersRouter.get('/', Auth, getAllUsers);
usersRouter.get('/:id', Auth, getUser);
usersRouter.post('/', Auth, createUser);
usersRouter.put('/:id', Auth, updateUser);
