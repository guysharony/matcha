import { compareSync, hashSync } from 'bcryptjs';
import { getenv } from '../common';

class BcryptService {
  constructor(private saltRounds: number) {}

  compare(plain: string, hash: string) {
    return compareSync(plain, hash);
  }

  hash(plain: string) {
    return hashSync(plain, this.saltRounds);
  }
}

export const bcryptService = new BcryptService(+getenv('BCRYPT_SALT_ROUNDS'));
