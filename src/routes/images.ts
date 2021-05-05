import { Router } from 'express';
import { Auth } from './auth';
import { getAllImages, getImage, createImage } from '../controllers/images';

export const imagesRouter = Router();

imagesRouter.get('/', Auth, getAllImages);
imagesRouter.get('/:id', Auth, getImage);
imagesRouter.post('/', Auth, createImage);
