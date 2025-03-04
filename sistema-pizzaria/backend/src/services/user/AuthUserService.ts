import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({email, password}: AuthRequest){
    //verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!user){
      throw new Error("user/password incorrent")
    }

    // Verificar se a senha está correta.
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("user/password incorrent")
    }

    //Gerar um token JWT e devolver os dados do usuario com id, name e email.
    //Se deu tudo certo, vamos gerar o token pro usuario.
    const token = sign(
      { //payload
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService };