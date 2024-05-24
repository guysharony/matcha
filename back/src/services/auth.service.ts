import { RegisterDto } from '../dto';
import { userService } from '.';

export class AuthService {
  register(registerDto: RegisterDto) {
    return userService.create(registerDto);
  }

  confirm(token: string) {
    return `confirm ${token}`;
  }

  login() {
    return 'login';
  }

  removeAccount() {
    return 'remove account';
  }

  requestData() {
    return 'request data';
  }
}
