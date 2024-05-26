import { compareSync, hashSync } from 'bcrypt';
import { User } from '../models';
import { userService } from './user.service';
import { RegisterDto } from '../dto/register-dto';
import { LoginDto } from '../dto/login-dto';

class AuthService {
  register(registerDto: RegisterDto) {
    const saltRounds = 12;
    const user = Object.assign(new User(), registerDto);
    user.password = hashSync(user.password, saltRounds);
    return userService.create(user);
  }

  confirm(token: string) {
    return `confirm ${token}`;
  }

  login(loginDto: LoginDto) {
    const user = userService.findByLogin(loginDto.login);
    if (user)
      return compareSync(loginDto.password, user.password);
    return false;
  }

  removeAccount() {
    return 'remove account';
  }

  requestData() {
    return 'request data';
  }
}

export const authService = new AuthService();
