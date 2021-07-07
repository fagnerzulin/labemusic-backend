import { Request, Response } from 'express';
import { MusicInputDTO } from '../model/Music';
import musicBusiness from '../business/music/MusicBusiness';

export default class MusicController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const input: MusicInputDTO = req.body;
      const token: string | undefined = req.headers.authorization;
      const music = await musicBusiness.create(input, token);

      res.status(201).send({ ...music });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const token: string | undefined = req.headers.authorization;

      const musics = await musicBusiness.getAll(token);

      res.status(200).send({ musics });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}
