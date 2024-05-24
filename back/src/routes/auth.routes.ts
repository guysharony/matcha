import express from 'express';
import { authController } from '../controllers';
import { jwtMiddleware } from '../middlewares';

export const router = express.Router();

router.post('/register', authController.register);
router.get('/confirm/:token', authController.confirm);
router.post('/login', jwtMiddleware, authController.login);
router.delete('/remove-account', jwtMiddleware, authController.removeAccount);
router.get('/request-data', jwtMiddleware, authController.requestData);
