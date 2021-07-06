import { Router } from 'express';
import { AppRoute } from '../App';
import AlbumController from '../controller/AlbumController';

const albumRoutes: Router = Router();
const albumController: AlbumController = new AlbumController();

albumRoutes.post('/create', albumController.create);
albumRoutes.get('/all', albumController.getAll);

const albumHandle: AppRoute = {
  path: '/album',
  handle: albumRoutes,
};

export default albumHandle;
