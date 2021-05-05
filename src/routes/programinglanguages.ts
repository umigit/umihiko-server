import { Router } from 'express';
import { Auth } from './auth';
import {
  getAllProgramingLanguages,
  getProgramingLanguage,
  createProgramingLanguage,
  updateProgramingLanguage,
} from '../controllers/programing-languages';

export const programingLanguagesRouter = Router();

programingLanguagesRouter.get('/', Auth, getAllProgramingLanguages);
programingLanguagesRouter.get('/:id', Auth, getProgramingLanguage);
programingLanguagesRouter.post('/', Auth, createProgramingLanguage);
programingLanguagesRouter.put('/:id', Auth, updateProgramingLanguage);
