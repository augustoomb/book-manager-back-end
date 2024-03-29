import { NextFunction, Request, Response } from 'express';
import UserInterface from '../interfaces/user';
import UserLoginInterface from '../interfaces/userLogin';
import { UserService } from '../services/user';
import { UserLoginService } from '../services/userLogin';
import { StatusCodes } from 'http-status-codes';
import Bcrypt from '../helpers/bcrypt';
import { RequestAuth } from '../interfaces/requestAuth';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { name, email, role } = req.body
  let { password } = req.body

  const userService = new UserService();
  password = Bcrypt.createPassHash(password);
  const objUser = UserInterface.parse({ name, email, password, role });
  const token = await userService.createUser(objUser);
  res.status(StatusCodes.CREATED).json(token);
}

export async function login(req: Request, res: Response, _next: NextFunction) {
  const { email, password } = req.body

  const userLoginService = new UserLoginService();
  const objLoginUser = UserLoginInterface.parse({ email, password })
  const token = await userLoginService.login(objLoginUser);
  res.status(StatusCodes.OK).json(token);
}

export async function find(req: RequestAuth, res: Response, _next: NextFunction) {
  const { id } = req.params;
  const { userId } = req;

  const userService = new UserService();

  const obj = await userService.find(userId || 0, parseInt(id, 10));

  return res.status(StatusCodes.OK).json(obj);
}

export async function list(req: RequestAuth, res: Response, _next: NextFunction) {
  const userService = new UserService();

  const { userId } = req;
  const userList = await userService.list(userId || 0);

  return res.json(userList);
}
