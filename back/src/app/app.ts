import express from 'express';
import { authRouter } from '../routes/auth.routes';

export class App {
  express: express.Application;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.express.use('/auth', authRouter);
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    }).on('error', (error: Error) => {
      console.error(error);
    });
  }
}
