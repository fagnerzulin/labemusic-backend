import { Router } from 'express';
import { AppRoute } from '../App';
import GenreController from '../controller/GenreController';

const genreRoutes: Router = Router();
const genreController: GenreController = new GenreController();

genreRoutes.post('/create', genreController.create);
genreRoutes.get('/all', genreController.getAll);

const genreHandle: AppRoute = {
  path: '/genre',
  handle: genreRoutes,
};

export default genreHandle;
