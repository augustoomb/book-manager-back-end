import { NextFunction, Request, Response } from 'express';
import BookInterface from '../interfaces/book';
import { BookService } from '../services/book';
import { StatusCodes } from 'http-status-codes';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { title, thumb, hasBeenRead, authorName, userId, infoLink
   } = req.body;

  const bookService = new BookService();
  const objBook = BookInterface.parse({
    title, thumb, hasBeenRead, authorName, userId, infoLink
  })
  await bookService.create(objBook)
  res.status(StatusCodes.CREATED).send();
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const bookService = new BookService();

  const obj = await bookService.find(parseInt(id, 10));
  return res.status(StatusCodes.OK).json(obj);
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const bookService = new BookService();
  const bookList = await bookService.list();

  return res.json(bookList);
}

export async function update(req: Request, res: Response, _next: NextFunction) {
  const { title, thumb, hasBeenRead, authorName, userId, infoLink
   } = req.body;

    const { id } = req.params;
    const bookService = new BookService();

    const objBook = BookInterface.parse({
      title, thumb, hasBeenRead, authorName, userId, infoLink
    })

    await bookService.update(Number(id), objBook)
    res.status(StatusCodes.OK).send();
  }

  export async function exclude(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const bookService = new BookService();

    await bookService.delete(Number(id));
    res.status(StatusCodes.OK).send();
  }
