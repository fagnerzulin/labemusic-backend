import BaseDatebase from './BaseDatabase';
import { Music, MusicToDB } from '../model/Music';
import CustomError from '../error/CustomError';

export interface IMusicDatabase {
  insertMusic(music: MusicToDB): Promise<void>;
  selectAll(author: string): Promise<Music[]>;
  selectById(id: string): Promise<Music>;
}

export class MusicDatabase extends BaseDatebase implements IMusicDatabase {
  public async insertMusic(music: MusicToDB): Promise<void> {
    try {
      await BaseDatebase.knexConnection(this.musicTable).insert(music.data);

      await Promise.all(
        music.genres.map(async genre => {
          await BaseDatebase.knexConnection(this.musicHasGenreTable).insert({
            music_id: music.data.id,
            genre_id: genre,
          });
        })
      );
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectAll(author: string): Promise<Music[]> {
    try {
      const result = await BaseDatebase.knexConnection(
        `${this.musicTable} as mt`
      )
        .select(
          'mt.id as id',
          'subtitle',
          'ut.name as author',
          'date',
          'file',
          'at.album as album',
          'gt.genre as genre'
        )
        .join(`${this.userTable} as ut`, 'ut.id', 'mt.author')
        .join(`${this.albumTable} as at`, 'at.id', 'mt.album')
        .join(`${this.musicHasGenreTable} as mgt`, 'mgt.music_id', 'mt.id')
        .join(`${this.genreTable} as gt`, 'gt.id', 'mgt.genre_id')
        .where('mt.author', author);

      const data = this.transformData(result);

      return data.map(
        music =>
          new Music(
            music.id,
            music.subtitle,
            music.author,
            music.file,
            music.genre,
            music.album,
            music.date
          )
      );
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectById(id: string): Promise<Music> {
    try {
      const result = await BaseDatebase.knexConnection(
        `${this.musicTable} as mt`
      )
        .select(
          'mt.id as id',
          'subtitle',
          'ut.name as author',
          'date',
          'file',
          'at.album as album',
          'gt.genre as genre'
        )
        .join(`${this.userTable} as ut`, 'ut.id', 'mt.author')
        .join(`${this.albumTable} as at`, 'at.id', 'mt.album')
        .join(`${this.musicHasGenreTable} as mgt`, 'mgt.music_id', 'mt.id')
        .join(`${this.genreTable} as gt`, 'gt.id', 'mgt.genre_id')
        .where('mt.id', id);

      const [data] = this.transformData(result);

      if (!data) throw new CustomError('Music not found', 404);

      return new Music(
        data.id,
        data.subtitle,
        data.author,
        data.file,
        data.genre,
        data.album,
        data.date
      );
    } catch (error) {
      throw new CustomError(
        error.message || error.sqlMessage,
        error.statusCode || 500
      );
    }
  }

  private transformData(data: any): any[] {
    const transformedData: any[] = [];
    for (const firstValue of data) {
      if (!transformedData.find(value => value.id === firstValue.id)) {
        transformedData.push(firstValue);
      }

      for (const secondValue of transformedData) {
        if (
          firstValue.id === secondValue.id &&
          firstValue.genre !== secondValue.genre
        ) {
          secondValue.genre = [secondValue.genre, firstValue.genre];
        }
      }
    }

    return transformedData;
  }
}
