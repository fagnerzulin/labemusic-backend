import BaseDatebase from './BaseDatabase';
import Genre, { GenreToDB } from '../model/Genre';
import CustomError from '../error/CustomError';

export interface IGenreDatabase {
  insertGenre(genre: GenreToDB): Promise<void>;
  selectAll(): Promise<Genre[]>;
}

export class GenreDatabase extends BaseDatebase implements IGenreDatabase {
  public async insertGenre(genre: GenreToDB): Promise<void> {
    try {
      await BaseDatebase.knexConnection(this.genreTable).insert(genre);

      await BaseDatebase.closeConnection();
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectAll(): Promise<Genre[]> {
    try {
      const result = await BaseDatebase.knexConnection(this.genreTable);

      await BaseDatebase.closeConnection();

      return result.map(item => new Genre(item.id, item.genre));
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }
}
