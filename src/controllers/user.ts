import { NextFunction, Request, Response } from 'express';
import UserInterface from '../interfaces/user';
import UserLoginInterface from '../interfaces/userLogin';
import { UserService } from '../services/user';
import { UserLoginService } from '../services/userLogin';
import { StatusCodes } from 'http-status-codes';
import Bcrypt from '../helpers/bcrypt';

export async function create(req: Request, res: Response, _next: NextFunction) {
  const { name, email, role } = req.body
  let { password } = req.body

  const userService = new UserService();
  password = Bcrypt.createPassHash(password);
  const objUser = UserInterface.parse({ name, email, password, role })  
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

// export function verifyToken(req: Request, res: Response, _next: NextFunction) {
//   const { token } = req.body

//   const userLoginService = new UserLoginService();
//   const data = userLoginService.verifyToken(token);
//   res.status(StatusCodes.OK).json(data);
// }

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
