import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { sendError } from '../common';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    sendError(res, StatusCodes.UNAUTHORIZED);
  else
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET as string);
      console.log(`jwtMiddleware: Valid token with data ${JSON.stringify(data)}`);
      res.locals.token = token;
      next();
    } catch (err) {
      sendError(res, StatusCodes.FORBIDDEN);
    }
}
