import { NextFunction, Request, Response } from 'express';
// import BadRequest from '../errors/badRequest';
// import NotFound from '../errors/notFound';
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

  // try {
  //   if (title === undefined) {
  //     throw new BadRequest('Você precisa enviar o título do livro');
  //   }
  //   if (authorId === undefined) {
  //     throw new BadRequest('Você precisa enviar o id do autor');
  //   }
  //   await bookService.create({ title, rating, year, genre, pages, thumb, hasBeenRead, authorId });
  //   res.status(201).send();
  // } catch (err) {

  //   next(err);
  // }
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const bookService = new BookService();

  const obj = await bookService.find(parseInt(id, 10));
  return res.status(200).json(obj);

  // try {
  //   if (id === undefined) throw new BadRequest('Você precisa enviar o id da pesquisa');

  //   const obj = await bookService.find(parseInt(id, 10));

  //   if (!obj) throw new NotFound('Livro não encontrado');

  //   return res.status(200).json(obj);
  // } catch (err) {
  //   next(err);
  // }
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const bookService = new BookService();
  const bookList = await bookService.list();

  return res.json(bookList);
  // try {
  //   const bookList = await bookService.list();

  //   return res.json(bookList);
  // } catch (err) {
  //   next(err);
  // }
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

    // try {
    //   if (title === undefined) {
    //     throw new BadRequest('Você precisa enviar o título do livro');
    //   }
    //   if (authorId === undefined) {
    //     throw new BadRequest('Você precisa enviar o id do autor');
    //   }
    //   await bookService.update(Number(id), { title, rating, year, genre,
    //     pages, thumb, hasBeenRead, authorId });
    //   res.status(201).send();
    // } catch (err) {  
    //   next(err);
    // }
  }

  export async function exclude(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const bookService = new BookService();

    await bookService.delete(Number(id));
    res.status(201).send();
    // try {      
    //   await bookService.delete(Number(id));
    //   res.status(201).send();
    // } catch (err) {
    //   next(err);
    // }
  }
