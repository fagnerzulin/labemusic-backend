import IdService, { IIdService } from '../../services/IdService';
import TokenService, { ITokenService } from '../../services/TokenService';
import { AlbumDatabase, IAlbumDatabase } from '../../data/AlbumDatabase';
import CustomError from '../../error/CustomError';
import { Album } from '../../model/Album';

export class AlbumBusiness {
  constructor(
    private idService: IIdService,
    private tokenService: ITokenService,
    private albumDatabase: IAlbumDatabase
  ) {}
  public async create(token: string | undefined, name: string): Promise<Album> {
    this.tokenService.getTokenData(token);

    if (!name) throw new CustomError('The album name is missing', 422);

    const album: Album = new Album(this.idService.idGenerate(), name);

    await this.albumDatabase.insertAlbum(album.albumToDb());

    return album;
  }
}

export default new AlbumBusiness(
  new IdService(),
  new TokenService(),
  new AlbumDatabase()
);
