import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { ZodError } from 'zod';
import BaseHTTPError from './errors/httpError';
import * as routers from './routes';
// import path from 'path';
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.get('/health', (_req, res) => res.status(200).send('OK'));

// view da API - substituiçao pelo swagger
// app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

// swagger
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// app.use('/authors', routers.authorRouter);
app.use('/books', routers.bookRouter);
app.use('/users', routers.userRouter);

// middleware de erros
app.use((err: BaseHTTPError, _: Request, res: Response, __: NextFunction) => {

    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    if(ZodError) {
      return res.status(400).json({ message: err })
    }
  
    // eslint-disable-next-line no-console
    console.error(err.message);
    return res.status(500).json({ message: 'Erro interno' });
  });

export default app;
