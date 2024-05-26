import { Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export function sendCode(res: Response, statusCode: StatusCodes, message?: string) {
  res.status(statusCode).send(message || getReasonPhrase(statusCode));
}
