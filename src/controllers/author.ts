import { NextFunction, Request, Response } from 'express';
import AuthorInterface from '../interfaces/author';
import { AuthorService } from '../services/author';
import { StatusCodes } from 'http-status-codes';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { name, site } = req.body

  const authorService = new AuthorService();
  const objAuthor = AuthorInterface.parse({ name, site })
  await authorService.create(objAuthor);
  res.status(StatusCodes.CREATED).send();
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const authorService = new AuthorService();

  const obj = await authorService.find(parseInt(id, 10));

  return res.status(StatusCodes.OK).json(obj);
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const authorService = new AuthorService();

  const authorList = await authorService.list();

  return res.json(authorList);
}
