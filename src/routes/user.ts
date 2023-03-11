import { Router } from 'express';
import { create, find, list } from '../controllers/user';

const userRouter = Router();


userRouter.get('/', list);
userRouter.get('/:id', find);
userRouter.post('/', create);
// userRouter.post('/login', login);


export default userRouter;