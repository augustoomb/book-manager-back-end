import { NextFunction, Request, Response } from 'express';
import BadRequest from '../errors/badRequest';
import NotFound from '../errors/notFound';
import AuthorInterface from '../interfaces/author';
import { AuthorService } from '../services/author';

export async function create(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as AuthorInterface;
  const authorService = new AuthorService();
  try {
    if (name === undefined) {
      throw new BadRequest('Você precisa enviar o nome do autor');
    }
    await authorService.create({ name });
    res.status(201).send();
  } catch (err) {

    next(err);
  }
}

export async function find(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const authorService = new AuthorService();
  try {
    if (id === undefined) throw new BadRequest('Você precisa enviar o id da pesquisa');

    const obj = await authorService.find(parseInt(id, 10));

    if (!obj) throw new NotFound('Autor não encontrado');

    return res.status(200).json(obj);
  } catch (err) {
    next(err);
  }
}

export async function list(_req: Request, res: Response, next: NextFunction) {
  const authorService = new AuthorService();
  try {
    const authorList = await authorService.list();

    return res.json(authorList);
  } catch (err) {
    next(err);
  }
}
