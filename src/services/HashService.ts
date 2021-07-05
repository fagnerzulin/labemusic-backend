import * as bcrypt from 'bcryptjs';

export interface IHashService {
  hash(plainText: string): string;
  compare(plainText: string, cypherText: string): boolean;
}

export default class HashService implements IHashService {
  public hash(plainText: string): string {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = bcrypt.genSaltSync(rounds);
    return bcrypt.hashSync(plainText, salt);
  }

  public compare(plainText: string, cypherText: string): boolean {
    return bcrypt.compareSync(plainText, cypherText);
  }
}
