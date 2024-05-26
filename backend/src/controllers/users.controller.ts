import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendCode } from '../common';
import { usersService } from '../services/users.service';

class UsersController {
  list(_req: Request, res: Response) {
    return sendCode(res, StatusCodes.OK, JSON.stringify(usersService.list()));
  }
}

export const usersController = new UsersController();
