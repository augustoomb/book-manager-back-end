import { Router } from 'express';
import { create, find, list, update, exclude } from '../controllers/book';
import { authenticateToken } from '../middleware/jwtAuth';

const bookRouter = Router();


bookRouter.get('/', authenticateToken, list);
bookRouter.get('/:id', find);
bookRouter.post('/', authenticateToken, create);
bookRouter.put('/:id', update);
bookRouter.delete('/:id', exclude);


export default bookRouter;