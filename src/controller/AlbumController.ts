import { Request, Response } from 'express';
import albumBusiness from '../business/album/AlbumBusiness';

export default class AlbumController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const albumName: string = req.body.name;
      const token = req.headers.authorization;

      const album = await albumBusiness.create(token, albumName);

      res.status(201).send({ id: album.getId, album: album.getAlbum });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }

  public async getAll() {}
}
