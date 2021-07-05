import BaseDatabase from './BaseDatabase';
import User, { UserToDB } from '../model/User';
import CustomError from '../error/CustomError';

export interface IUserDatabase {
  insertUser(user: UserToDB): Promise<void>;
  selectByEmail(email: string): Promise<User | undefined>;
}

export class UserDatabase extends BaseDatabase implements IUserDatabase {
  public async insertUser(user: UserToDB): Promise<void> {
    try {
      await BaseDatabase.knexConnection(this.userTable).insert(user);

      await BaseDatabase.closeConnection();
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }

  public async selectByEmail(email: string): Promise<User | undefined> {
    try {
      const [result] = await BaseDatabase.knexConnection(this.userTable)
        .select()
        .where({ email });

      if (!result) return undefined;

      return new User(
        result.name,
        result.email,
        result.nickname,
        result.password,
        result.id
      );
    } catch (error) {
      throw new CustomError(error.message || error.sqlMessage, 500);
    }
  }
}
