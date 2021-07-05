import { Router } from 'express';
import { AppRoute } from '../App';

const userRoutes: Router = Router();

userRoutes.post('/signup');

const userHandle: AppRoute = {
  path: '/user',
  handle: userRoutes,
};

export default userHandle;
