import BaseDatebase from './BaseDatabase';
import { Music, MusicToDB } from '../model/Music';
import CustomError from '../error/CustomError';

export interface IMusicDatabase {
  insertMusic(music: MusicToDB): Promise<void>;
  selectAll(author: string): Promise<Music[]>;
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

      const data = this.tranformData(result);

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

  private tranformData(data: any): any[] {
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
