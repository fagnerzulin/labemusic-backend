import BaseDatebase from './BaseDatabase';
import { MusicToDB } from '../model/Music';
import CustomError from '../error/CustomError';

export class MusicDatabase extends BaseDatebase {
  public async insertMusic(music: MusicToDB): Promise<void> {
    try {
      await BaseDatebase.knexConnection(this.musictTable).insert(music.data);

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
}
