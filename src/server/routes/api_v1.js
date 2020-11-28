import { Router } from 'express';
import usersRouter from './users';
let router = Router();

router.use('/users', usersRouter);

export default router;
