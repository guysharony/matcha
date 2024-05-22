import express from 'express';
import { pingController } from '../controllers';
import { jwtMiddleware } from '../middlewares';

export const router = express.Router();

router.get('/', pingController.getPing);
router.get('/protected', jwtMiddleware, pingController.getPing);
