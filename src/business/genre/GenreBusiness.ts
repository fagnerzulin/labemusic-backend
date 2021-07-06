import IdService, { IIdService } from '../../services/IdService';
import TokenService, { ITokenService } from '../../services/TokenService';
import { GenreDatabase, IGenreDatabase } from '../../data/GenreDatabase';
import Genre from '../../model/Genre';
import CustomError from '../../error/CustomError';

export class GenreBusiness {
  constructor(
    private idService: IIdService,
    private tokenService: ITokenService,
    private genreDatabase: IGenreDatabase
  ) {}

  public async create(name: string, token: string | undefined): Promise<Genre> {
    this.tokenService.getTokenData(token);
    if (!name) throw new CustomError('The name field is missing', 422);

    const genre = new Genre(this.idService.idGenerate(), name);

    await this.genreDatabase.insertGenre(genre.genreToDb());

    return genre;
  }

  public async getAll(token: string | undefined): Promise<Genre[]> {
    this.tokenService.getTokenData(token);

    const genres = await this.genreDatabase.selectAll();

    return genres;
  }
}

export default new GenreBusiness(
  new IdService(),
  new TokenService(),
  new GenreDatabase()
);
