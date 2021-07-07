import IdService, { IIdService } from '../../services/IdService';
import TokenService, { ITokenService } from '../../services/TokenService';
import { IMusicDatabase, MusicDatabase } from '../../data/MusicDatabase';
import { Music, MusicInputDTO } from '../../model/Music';
import MusicValidations from './MusicValidations';
import CurrentDate, { ICurrentDate } from '../../utils/CurrentDate';

export class MusicBusiness extends MusicValidations {
  constructor(
    private idService: IIdService,
    private tokenService: ITokenService,
    private musicDatabase: IMusicDatabase,
    private currentTime: ICurrentDate
  ) {
    super();
  }

  public async create(
    data: MusicInputDTO,
    token: string | undefined
  ): Promise<Music> {
    const { id } = this.tokenService.getTokenData(token);

    this.hasMusicFields(data);

    const datetime = this.currentTime.now();

    const music = new Music(
      this.idService.idGenerate(),
      data.subtitle,
      id,
      data.file,
      data.genre,
      data.album,
      datetime
    );

    await this.musicDatabase.insertMusic(music.musicToDB());

    return music;
  }
}

export default new MusicBusiness(
  new IdService(),
  new TokenService(),
  new MusicDatabase(),
  new CurrentDate()
);
