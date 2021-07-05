import { IUserDatabase } from '../../data/UserDatabase';
import User, { UserInputDTO } from '../../model/User';
import { IHashService } from '../../services/HashService';
import { IIdService } from '../../services/IdService';
import { ITokenService } from '../../services/TokenService';
import UserValidations from './UserValidations';

export class UserBusiness extends UserValidations {
  constructor(
    private hashService: IHashService,
    private idService: IIdService,
    private tokenService: ITokenService,
    private userDatabase: IUserDatabase
  ) {
    super();
  }

  public async signup(data: UserInputDTO) {
    this.validateSignupFields(data);

    // const user: User = new User(
    //   data.name,
    //   data.email,
    //   data.nickname,
    //   data.password
    // );
  }
}
