import { Request, Response } from 'express';
import { UserInputDTO } from '../model/User';

export default class UserController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const input: UserInputDTO = req.body;
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}
