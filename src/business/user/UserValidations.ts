import { UserInputDTO, UserLoginDTO } from '../../model/User';
import CustomError from '../../error/CustomError';

export default class UserValidations {
  private hasSignupFields({
    email,
    name,
    nickname,
    password,
  }: UserInputDTO): void {
    if (!email || !name || !nickname || !password) {
      throw new CustomError('Some field is missing', 422);
    }
  }

  protected hasLoginFields({ email, password }: UserLoginDTO): void {
    if (!email || !password) {
      throw new CustomError('Some field is missing', 422);
    }
  }

  private validateEmail(email: string): void {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      throw new CustomError('The email is not valid', 422);
    }
  }

  private validatePassword(password: string): void {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      throw new CustomError(
        'The password must have at least six characters, at least one letter, one number and one special character'
      );
    }
  }

  protected validateSignupFields(data: UserInputDTO): void {
    this.hasSignupFields(data);
    this.validateEmail(data.email);
    this.validatePassword(data.password);
  }
}
