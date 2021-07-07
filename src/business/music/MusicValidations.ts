import CustomError from '../../error/CustomError';
import { MusicInputDTO } from '../../model/Music';

export default class MusicValidations {
  protected hasMusicFields({
    album,
    file,
    genre,
    subtitle,
  }: MusicInputDTO): void {
    if (!subtitle || genre.length === 0 || !file || !album) {
      throw new CustomError('Some field is missing', 422);
    }
  }
}
