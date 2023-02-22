import { NextFunction, Request, Response } from 'express';
import BookInterface from '../interfaces/book';
import { BookService } from '../services/book';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { title, rating, year,
    genre, pages, thumb, hasBeenRead, authorId
   } = req.body;

  const bookService = new BookService();
  const objBook = BookInterface.parse({
    title, rating, year,
    genre, pages, thumb, hasBeenRead, authorId
  })
  await bookService.create(objBook)
  res.status(201).send();
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const bookService = new BookService();

  const obj = await bookService.find(parseInt(id, 10));
  return res.status(200).json(obj);
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const bookService = new BookService();
  const bookList = await bookService.list();

  return res.json(bookList);
}

export async function update(req: Request, res: Response, _next: NextFunction) {
  const { title, rating, year,
    genre, pages, thumb, hasBeenRead, authorId
   } = req.body;

    const { id } = req.params;
    const bookService = new BookService();

    const objBook = BookInterface.parse({
      title, rating, year,
      genre, pages, thumb, hasBeenRead, authorId
    })

    await bookService.update(Number(id), objBook)
    res.status(201).send();
  }

  export async function exclude(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const bookService = new BookService();

    await bookService.delete(Number(id));
    res.status(201).send();
  }
