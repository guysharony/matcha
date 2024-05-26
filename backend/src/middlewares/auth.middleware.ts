import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtAuthService } from '../services/jwt.service';
import { sendCode } from '../common';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    sendCode(res, StatusCodes.UNAUTHORIZED);
  else
    try {
      const data = jwtAuthService.verify(token);
      console.log(`authMiddleware: Valid token with data ${JSON.stringify(data)}`);
      res.locals.token = token;
      next();
    } catch (err) {
      sendCode(res, StatusCodes.FORBIDDEN);
    }
}
