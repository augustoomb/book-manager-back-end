import { NextFunction, Request, Response } from 'express';
// import BadRequest from '../errors/badRequest';
import NotFound from '../errors/notFound';
import AuthorInterface from '../interfaces/author';
import { AuthorService } from '../services/author';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { name, site } = req.body

  const authorService = new AuthorService();
  const objAuthor = AuthorInterface.parse({ name, site })
  await authorService.create(objAuthor);
  res.status(201).send();
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const authorService = new AuthorService();
  
  // if (id === undefined) throw new BadRequest('Você precisa enviar o id da pesquisa');

  const obj = await authorService.find(parseInt(id, 10));
  if (!obj) throw new NotFound('Autor não encontrado');

  return res.status(200).json(obj);

  // try {
  //   if (id === undefined) throw new BadRequest('Você precisa enviar o id da pesquisa');

  //   const obj = await authorService.find(parseInt(id, 10));

  //   if (!obj) throw new NotFound('Autor não encontrado');

  //   return res.status(200).json(obj);
  // } catch (err) {
  //   next(err);
  // }
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const authorService = new AuthorService();

  const authorList = await authorService.list();

  return res.json(authorList);

  // try {
  //   const authorList = await authorService.list();

  //   return res.json(authorList);
  // } catch (err) {
  //   next(err);
  // }
}
