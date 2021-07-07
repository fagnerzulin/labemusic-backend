import { Router } from 'express';
import { AppRoute } from '../App';
import MusicController from '../controller/MusicController';

const musicRoutes: Router = Router();
const musicController: MusicController = new MusicController();

musicRoutes.post('/create', musicController.create);
// musicRoutes.get('/all', musicController.getAll);

const musicHandle: AppRoute = {
  path: '/music',
  handle: musicRoutes,
};

export default musicHandle;
