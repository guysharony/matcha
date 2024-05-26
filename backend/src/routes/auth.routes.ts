import express from 'express';
import { authController } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

export const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.get('/confirm/:token', authController.confirm);
authRouter.post('/login', authController.login);
authRouter.delete('/remove-account', authMiddleware, authController.removeAccount);
authRouter.get('/request-data', authMiddleware, authController.requestData);
