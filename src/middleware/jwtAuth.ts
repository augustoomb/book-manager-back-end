import { NextFunction, Request, Response, } from 'express';
// import * as jwt from 'jsonwebtoken';
import JwtToken from '../helpers/jwtToken';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        'message': {
            'name': 'TokenNotFound',
            'message': 'Token Not Found'
        }
    });
    }

    const validation = JwtToken.verifyToken(authorization)
    
    console.log(validation.payload)
    next();
  }
