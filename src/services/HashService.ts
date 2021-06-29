import * as bcrypt from 'bcryptjs';

export default class HashService {
  public hash(plainText: string): string {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = bcrypt.genSaltSync(rounds);
    return bcrypt.hashSync(plainText, salt);
  }

  public compare(plainText: string, cypherText: string): boolean {
    return bcrypt.compareSync(plainText, cypherText);
  }
}
