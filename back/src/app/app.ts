import express from 'express';
import { pingRoutes } from '../routes/ping.routes';

class App {
  express: express.Application;

  constructor() {
    this.express = express();
    this.express.use('/ping', pingRoutes);
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    }).on('error', (error: Error) => {
      console.error(error);
    });
  }
}

export const app = new App();
