import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
){
  // Receber o token
  const authToken = req.headers.authorization;

  // Se não receber token, vai da erro
  if(!authToken){
    return res.status(401).end();
  }

  //Vai ignorar o primeira palavar e o espaço, e pegar apenas o token
  const [, token] = authToken.split(" ")

  try{
    //vvalidar esse token.[
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    return next();

  }catch(err){
    return res.status(401).end();
  }
  
}