import { Request, Response } from 'express';
import userBusiness from '../business/user/UserBusiness';
import { UserInputDTO } from '../model/User';

export default class UserController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const input: UserInputDTO = req.body;
      const token = await userBusiness.signup(input);

      res.status(201).send({ token });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}
