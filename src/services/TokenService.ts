import * as jwt from 'jsonwebtoken';

export interface AuthenticationData {
  id: string;
}

export default class TokenService {
  private key: string = process.env.JWT_KEY;

  public generateToken(paylod: AuthenticationData): string {
    return jwt.sign(paylod, this.key, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  public getTokenData(token: string | undefined): string | jwt.JwtPayload {
    const validatedToken = this.validateToken(token);
    return jwt.verify(validatedToken, this.key);
  }

  private validateToken(token: string | undefined): string {
    if (!token) throw new Error('The token must be informed');

    return token;
  }
}
