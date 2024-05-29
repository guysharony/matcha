import { app } from './app';

try {
  app.listen(Number(process.env.BACKEND_PORT));
} catch (error) {
  console.error(error);
}
