import Router from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.use((req, res, next) => {
    console.log('---> userRouter.js');
    next();
});

router.route('/register')
    .post(userController.register);

router.route('/login')
    .post(userController.login);

router.use((req, res, next) => {
    console.log('---> >>>>>>')
    next();
});

export default router;