import { Router } from 'express';
import { usersRouter } from './users';
import { programingLanguagesRouter } from './programinglanguages';
import { frameworksRouter } from './frameworks';
import { operatingSystemsRouter } from './operatingsystems';
import { databasesRouter } from './databases';
import { toolsRouter } from './tools';
import { servicesRouter } from './services';
import { imagesRouter } from './images';

export const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/programing-languages', programingLanguagesRouter);
apiRouter.use('/frameworks', frameworksRouter);
apiRouter.use('/operating-systems', operatingSystemsRouter);
apiRouter.use('/databases', databasesRouter);
apiRouter.use('/tools', toolsRouter);
apiRouter.use('/services', servicesRouter);
apiRouter.use('/images', imagesRouter);
