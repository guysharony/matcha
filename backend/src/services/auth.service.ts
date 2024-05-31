import { User } from '../models';
import { userService } from './user.service';
import { bcryptService } from './bcrypt.service';
import { emailService } from './email.service';
import { jwtActivationService, jwtAuthService } from './jwt.service';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

class AuthService {
  register(registerDto: RegisterDto) {
    const user = Object.assign(new User(), registerDto);
    user.password = bcryptService.hash(user.password);
    const createdUser = userService.create(user);
    if (!createdUser)
      return null;
    const token = jwtActivationService.sign({ id: createdUser.id });
    emailService.sendActivationEmail(createdUser.email, token);
    return createdUser;
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
