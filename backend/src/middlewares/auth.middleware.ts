import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtAuthService } from '../services/jwt.service';
import { sendCode } from '../common';

interface TokenPayload {
  id: number;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    sendCode(res, StatusCodes.UNAUTHORIZED);
  else
    try {
      const data : TokenPayload = jwtAuthService.verify(token);
      res.locals.user_id = data.id;
      next();
    } catch (err) {
      sendCode(res, StatusCodes.FORBIDDEN);
    }
}
