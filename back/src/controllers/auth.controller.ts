import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendCode } from '../common';
import { RegisterDto } from '../dto';
import { authService } from '../services';

export class AuthController {
  register(req: Request, res: Response) {
    const body = req.body;
    if (!body.email || !body.username || !body.first_name || !body.last_name || !body.password)
      return sendCode(res, StatusCodes.BAD_REQUEST, 'Email and password are required');
    const registerDto = new RegisterDto(body.email, body.username, body.first_name, body.last_name,
      body.password);
    sendCode(res, authService.register(registerDto) ? StatusCodes.CREATED : StatusCodes.CONFLICT);
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
