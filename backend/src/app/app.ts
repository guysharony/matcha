import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { authRouter } from '../routes/auth.routes';
import { usersRouter } from '../routes/users.routes';
import { removeNotActivatedTask } from '../tasks/remove_not_activated.task';

export class App {
  app: express.Application;

  constructor() {
    dotenv.config();
    this.app = express();
    this.app.use(cors({
      origin: `http://localhost:${process.env.FRONTEND_PORT}`,
      credentials: true
    }))
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Set up routes
    this.app.use('/auth', authRouter);
    this.app.use('/users', usersRouter);

    // Set up tasks
    removeNotActivatedTask.start();
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    }).on('error', (error: Error) => {
      console.error(error);
    });
  }
}
