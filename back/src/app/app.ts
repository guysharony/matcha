import dotenv from 'dotenv';
import express from 'express';
import { authRouter } from '../routes/auth.routes';
import { usersRouter } from '../routes/users.routes';

export class App {
  express: express.Application;

  constructor() {
    dotenv.config();
    this.express = express();
    this.express.use(express.json());
    this.express.use('/auth', authRouter);
    this.express.use('/users', usersRouter);
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    }).on('error', (error: Error) => {
      console.error(error);
    });
  }
}
