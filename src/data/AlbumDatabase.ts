import BaseDatebase from './BaseDatabase';
import { Album, AlbumToDB } from '../model/Album';
import CustomError from '../error/CustomError';

export class AlbumDatabase extends BaseDatebase {
  public async insertAlbum(album: AlbumToDB): Promise<void> {
    try {
      await BaseDatebase.knexConnection(this.albumTable).insert(album);
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectAll(): Promise<Album[]> {
    try {
      const result = await BaseDatebase.knexConnection(this.albumTable);

      return result.map(item => new Album(item.id, item.album));
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }
}
