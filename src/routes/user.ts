import { Router } from 'express';
import { create, find, list, login, verifyToken } from '../controllers/user';

const userRouter = Router();


userRouter.get('/', list);
userRouter.get('/:id', find);
userRouter.post('/', create);
userRouter.post('/login', login);
userRouter.post('/token', verifyToken);


export default userRouter;