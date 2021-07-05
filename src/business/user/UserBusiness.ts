import User, { UserInputDTO } from '../../model/User';
import UserValidations from './UserValidations';

export class UserBusiness extends UserValidations {
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
