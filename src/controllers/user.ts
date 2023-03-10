import { NextFunction, Request, Response } from 'express';
import UserInterface from '../interfaces/user';
import { UserService } from '../services/user';
import { StatusCodes } from 'http-status-codes';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { name, email, password, role } = req.body

  const userService = new UserService();
  const objUser = UserInterface.parse({ name, email, password, role })
  await userService.create(objUser);
  res.status(StatusCodes.CREATED).send();
}

export async function find(req: Request, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const userService = new UserService();

  const obj = await userService.find(parseInt(id, 10));

  return res.status(StatusCodes.OK).json(obj);
}

export async function list(_req: Request, res: Response, _next: NextFunction) {
  const userService = new UserService();

  const userList = await userService.list();

  return res.json(userList);
}
