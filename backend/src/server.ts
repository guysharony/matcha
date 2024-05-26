import { app } from './app';

try {
  app.listen(Number(process.env.PORT));
} catch (error) {
  console.error(error);
}
