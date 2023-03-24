import { NextFunction, Response } from 'express';
import BookInterface from '../interfaces/book';
import { BookService } from '../services/book';
import { StatusCodes } from 'http-status-codes';
import { RequestAuth } from '../interfaces/requestAuth';

export async function create(req: RequestAuth, res: Response, _next: NextFunction) {
  const { title, thumb, hasBeenRead, authorName, infoLink
   } = req.body;

  const { userId } = req;

  const bookService = new BookService();

  const objBook = BookInterface.parse({
    title, thumb, hasBeenRead, authorName, userId, infoLink
  })
  const createdBook = await bookService.create(objBook)
  res.status(StatusCodes.CREATED).json(createdBook);
}

export async function find(req: RequestAuth, res: Response, _next: NextFunction) {
  const { id } = req.params;

  const { userId } = req;

  const bookService = new BookService();

  const obj = await bookService.find(userId || 0, parseInt(id, 10));
  return res.status(StatusCodes.OK).json(obj);
}

export async function list(req: RequestAuth, res: Response, _next: NextFunction) {
  const bookService = new BookService();

  const { userId } = req;
  // console.log('augusto', userId)
  const bookList = await bookService.list(userId || 0);

  return res.json(bookList);
}

export async function update(req: RequestAuth, res: Response, _next: NextFunction) {
    const { title, thumb, hasBeenRead, authorName, infoLink
    } = req.body;
    const { userId } = req;
    const { id } = req.params;

    const bookService = new BookService();

    const objBook = BookInterface.parse({
      title, thumb, hasBeenRead, authorName, userId, infoLink
    })

   await bookService.update(userId || 0, Number(id), objBook)
    res.status(StatusCodes.OK).send();
  }

  export async function exclude(req: RequestAuth, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const { userId } = req;

    const bookService = new BookService();

    await bookService.delete(userId || 0, Number(id));
    res.status(StatusCodes.OK).send();
  }
