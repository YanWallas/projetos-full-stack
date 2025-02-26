import  express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

// Indicando que vai usar esse tipo de formato.
app.use(express.json());

// vai utilizar essa route
app.use(router);

// porta do servidor, e mensagem quando der certo.
app.listen(3333, () => console.log('Servidor online!'))