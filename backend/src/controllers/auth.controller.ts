import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authService } from '../services/auth.service';
import { LoginDto } from '../dto/login-dto';
import { RegisterDto } from '../dto/register-dto';
import { sendCode } from '../common';
import { validate } from '../validators';

function ParseBody(DtoClass: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const req = args[0];
      const res = args[1];
      const dtoInstance = Object.assign(new DtoClass(), req.body);
      const errors = validate(dtoInstance);
      if (errors.length > 0)
        return sendCode(res, StatusCodes.BAD_REQUEST, JSON.stringify({ errors }));
      return originalMethod.apply(this, args);
    };
  };
}

class AuthController {
  @ParseBody(RegisterDto)
  register(req: Request, res: Response) {
    return sendCode(res, authService.register(req.body) ? StatusCodes.CREATED : StatusCodes.CONFLICT);
  }

  confirm(req: Request, res: Response) {
    res.send('confirm ' + req.params.token);
  }

  @ParseBody(LoginDto)
  login(req: Request, res: Response) {
    return sendCode(res, authService.login(req.body) ? StatusCodes.OK : StatusCodes.UNAUTHORIZED);
  }

  removeAccount(_req: Request, res: Response) {
    res.send('remove account');
  }

  requestData(_req: Request, res: Response) {
    res.send('request data');
  }
}

export const authController = new AuthController();
