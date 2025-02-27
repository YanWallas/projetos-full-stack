import { Router, Request, Response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: "Sistema Pizzaria" })


  //throw new Error('Erro ao fazer essa requisição') - simulação de erro
})

export { router };