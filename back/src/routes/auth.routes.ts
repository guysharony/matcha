import express from 'express';
import { authController } from '../controllers/auth.controller';
import { jwtMiddleware } from '../middlewares';

const router = express.Router();

router.post('/register', authController.register);
router.get('/confirm/:token', authController.confirm);
router.post('/login', authController.login);
router.delete('/remove-account', jwtMiddleware, authController.removeAccount);
router.get('/request-data', jwtMiddleware, authController.requestData);

export { router as authRouter };
