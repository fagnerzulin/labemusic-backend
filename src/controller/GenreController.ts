import { Request, Response } from 'express';
import genreBusiness from '../business/genre/GenreBusiness';

export default class GenreController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const genreName: string = req.body.name;
      const token: string | undefined = req.headers.authorization;

      const genre = await genreBusiness.create(genreName, token);

      res.status(201).send({ id: genre.getId, genre: genre.getGenre });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const token: string | undefined = req.headers.authorization;

      const genres = await genreBusiness.getAll(token);

      res.send({ genres });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}
