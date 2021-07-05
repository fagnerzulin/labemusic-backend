import { IUserDatabase, UserDatabase } from '../../data/UserDatabase';
import User, { UserInputDTO, UserLoginDTO } from '../../model/User';
import HashService, { IHashService } from '../../services/HashService';
import IdService, { IIdService } from '../../services/IdService';
import TokenService, { ITokenService } from '../../services/TokenService';
import UserValidations from './UserValidations';
import CustomError from '../../error/CustomError';

export class UserBusiness extends UserValidations {
  constructor(
    private hashService: IHashService,
    private idService: IIdService,
    private tokenService: ITokenService,
    private userDatabase: IUserDatabase
  ) {
    super();
  }

  public async signup(data: UserInputDTO): Promise<string> {
    this.validateSignupFields(data);

    const id: string = this.idService.idGenerate();

    const user: User = new User(
      data.name,
      data.email,
      data.nickname,
      this.hashService.hash(data.password),
      id
    );

    await this.userDatabase.insertUser(user.userToDb());

    return this.tokenService.generateToken({ id });
  }

  public async login(data: UserLoginDTO): Promise<string> {
    this.hasLoginFields(data);

    const user = await this.userDatabase.selectByEmail(data.email);

    if (!user) throw new CustomError('Invalid credentials', 403);

    if (!this.hashService.compare(data.password, user.getPassword)) {
      throw new CustomError('Invalid credentials', 403);
    }

    return this.tokenService.generateToken({ id: user.getId });
  }
}

export default new UserBusiness(
  new HashService(),
  new IdService(),
  new TokenService(),
  new UserDatabase()
);
