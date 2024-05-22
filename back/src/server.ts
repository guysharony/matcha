import dotenv from 'dotenv';
import { app } from './app/app';

dotenv.config();

try {
  app.listen(Number(process.env.PORT));
} catch (error) {
  console.error(error);
}
