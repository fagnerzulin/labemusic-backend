import BaseDatabase from './BaseDatabase';
import { UserToDB } from '../model/User';

export class UserDatabase extends BaseDatabase {
  public async insertUser(user: UserToDB): Promise<void> {
    await BaseDatabase.knexConnection(this.userTable).insert(user);
  }
}
