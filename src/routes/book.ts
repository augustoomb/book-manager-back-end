import { Router } from 'express';
import { create, find, list, update, exclude } from '../controllers/book';

const bookRouter = Router();


bookRouter.get('/', list);
bookRouter.get('/:id', find);
bookRouter.post('/', create);
bookRouter.put('/:id', update);
bookRouter.delete('/:id', exclude);


export default bookRouter;