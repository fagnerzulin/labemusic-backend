import BaseDatebase from './BaseDatabase';
import Genre, { GenreToDB } from '../model/Genre';
import CustomError from '../error/CustomError';

export class GenreDatabase extends BaseDatebase {
  public async insertGenre(genre: GenreToDB): Promise<void> {
    try {
      await BaseDatebase.knexConnection(this.genreTable).insert(genre);
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectAll(): Promise<Genre[]> {
    try {
      const result = await BaseDatebase.knexConnection(this.genreTable);

      return result.map(item => new Genre(item.id, item.genre));
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }
}
