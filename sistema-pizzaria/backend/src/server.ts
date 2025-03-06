import  express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from "path";

import { router } from "./routes";

const app = express();

// Indicando que vai usar esse tipo de formato.
app.use(express.json());

// Pacote para habilitar qualquer URL/IP conseguir fazer requisição nessa API.
app.use(cors());

// vai utilizar essa route
app.use(router);

// ROTA PARA ACESSO DA IMG
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

// Tratando erros 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

// porta do servidor, e mensagem quando der certo.
app.listen(3333, () => console.log('Servidor online!'))