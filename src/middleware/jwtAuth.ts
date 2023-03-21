import { NextFunction, Response, } from 'express';
// import * as jwt from 'jsonwebtoken';
import JwtToken from '../helpers/jwtToken';
import { RequestAuth } from '../interfaces/requestAuth';
import UserModel from '../models/user';

export async function authenticateToken(req: RequestAuth, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({'message': 'Token não encontrado'});
    }

    const validation = JwtToken.verifyToken(authorization)
    
    if (validation.payload) {
      if (await userExists(validation.payload.id)){
        req.userId = validation.payload.id
        next();
      }
      else {
        return res.status(401).json({'message': 'Token inválido'});
      }
    } else {
      return res.status(401).json({'message': 'Token inválido'});
    }
}

async function userExists(idUser: number){
  const userModel = new UserModel();

  const foundUser = await userModel.find(idUser);

  return foundUser ? true : false
}
