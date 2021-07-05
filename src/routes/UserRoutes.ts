import { Router } from 'express';
import { AppRoute } from '../App';
import UserController from '../controller/UserController';

const userRoutes: Router = Router();
const userController: UserController = new UserController();

userRoutes.post('/signup', userController.signup);

const userHandle: AppRoute = {
  path: '/user',
  handle: userRoutes,
};

export default userHandle;
