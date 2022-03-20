import Router from 'express';
import userController from '../controllers/userController.js';
import authHandler from '../middleware/authHandler.js'
import userHandler from '../middleware/userHandler.js';
import addTimeStamp from '../middleware/addTimestamp.js';

const router = Router();

router.use((req, res, next) => {
    console.log('---> userRouter.js');
    next();
});

router.use(userHandler.validateUserEmail);

router.route('/register')
    .post(authHandler.encryptPassword)
    .post(addTimeStamp)
    .post(userController.register);
    

router.route('/login')
    .post(userController.login);

router.use((req, res, next) => {
    console.log('---> >>>>>>')
    next();
});

export default router;
