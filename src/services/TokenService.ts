import * as jwt from 'jsonwebtoken';

export interface AuthenticationData {
  id: string;
}

export interface ITokenService {
  generateToken(paylod: AuthenticationData): string;
  getTokenData(token: string | undefined): AuthenticationData;
}

export default class TokenService implements ITokenService {
  private key: string = process.env.JWT_KEY as string;

  public generateToken(paylod: AuthenticationData): string {
    return jwt.sign(paylod, this.key, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  public getTokenData(token: string | undefined): AuthenticationData {
    const validatedToken = this.validateToken(token);
    return jwt.verify(validatedToken, this.key) as AuthenticationData;
  }

  private validateToken(token: string | undefined): string {
    if (!token) throw new Error('The token must be informed');

    return token;
  }
}
