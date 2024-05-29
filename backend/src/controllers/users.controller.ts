import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendCode } from '../common';
import { userService } from '../services/user.service';
import { AuthenticatedUserDto } from '../dto/authenticated-user.dto';

function transform(dst: any, src: any) {
  for (const key in src)
    if (Object.prototype.hasOwnProperty.call(dst, key))
      dst[key] = src[key];
  return dst;
}

class UsersController {
  me(req: Request, res: Response) {
    const user = userService.findById(res.locals.user_id);
    if (!user)
      return sendCode(res, StatusCodes.NOT_FOUND);
    const userDto = transform(new AuthenticatedUserDto(), user);
    return sendCode(res, StatusCodes.OK, JSON.stringify(userDto));
  }

  list(_req: Request, res: Response) {
    return sendCode(res, StatusCodes.OK, JSON.stringify(userService.list()));
  }
}

export const usersController = new UsersController();
