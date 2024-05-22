import express from 'express';
import { pingController } from '../controllers/ping.controller';

const router = express.Router();

router.get('/', pingController.getPing);

export { router as pingRoutes };
