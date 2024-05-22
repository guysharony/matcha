import express from 'express';
import { pingController } from '../controllers';

export const router = express.Router();

router.get('/', pingController.getPing);
