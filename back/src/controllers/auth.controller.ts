import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendCode } from '../common';
import { RegisterDto } from '../dto';
import { authService } from '../services';
import { validate } from '../validators';

export class AuthController {
  register(req: Request, res: Response) {
    const registerDto = Object.assign(new RegisterDto(), req.body);
    const errors = validate(registerDto);
    if (errors.length > 0)
      return sendCode(res, StatusCodes.BAD_REQUEST, JSON.stringify({ errors }));
    return sendCode(res, authService.register(registerDto) ? StatusCodes.CREATED : StatusCodes.CONFLICT);
  }

  confirm(req: Request, res: Response) {
    res.send('confirm ' + req.params.token);
  }

  login(_req: Request, res: Response) {
    res.send('login');
  }

  removeAccount(_req: Request, res: Response) {
    res.send('remove account');
  }

  requestData(_req: Request, res: Response) {
    res.send('request data');
  }
}
