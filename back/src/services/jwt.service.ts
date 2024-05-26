import { sign, verify } from 'jsonwebtoken';
import { getenv } from '../common';

class JwtService {
  constructor(private secret : string, private expiresIn : string) {}

  sign(data: any): string {
    return sign(data, this.secret, { expiresIn: this.expiresIn });
  }

  verify(token: string): any {
    return verify(token, this.secret);
  }
}

export const jwtActivationService = new JwtService(
  getenv('JWT_ACTIVATION_SECRET'), getenv('JWT_ACTIVATION_EXPIRATION')
);

export const jwtAuthService = new JwtService(
  getenv('JWT_AUTH_SECRET'), getenv('JWT_AUTH_EXPIRATION')
);
