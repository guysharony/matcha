import { User } from '../models';
import { userService } from './user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { bcryptService } from './bcrypt.service';
import { jwtAuthService } from './jwt.service';

class AuthService {
  register(registerDto: RegisterDto) {
    const user = Object.assign(new User(), registerDto);
    user.password = bcryptService.hash(user.password);
    return userService.create(user);
  }

  confirm(token: string) {
    return `confirm ${token}`;
  }

  login(loginDto: LoginDto) {
    const user = userService.findByLogin(loginDto.login);
    if (user && bcryptService.compare(loginDto.password, user.password))
      return jwtAuthService.sign({ id: user.id });
    return null;
  }

  removeAccount() {
    return 'remove account';
  }

  requestData() {
    return 'request data';
  }
}

export const authService = new AuthService();
