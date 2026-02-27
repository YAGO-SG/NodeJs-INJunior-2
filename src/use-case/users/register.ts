import type { User } from "@/@types/prisma/client.js"
import { env } from "@/env/index.js"
import { prisma } from "@/libs/prisma.js"
import { hash } from "bcryptjs"

interface RegisterUserUseCaseRequest {
    name: string,
    email: string,
    password: string,
    photo: string,
}

type RegisterUserUseCaseResponse = {
    user: User // o User é uma importação do meu modelo feito dentro do schema.prisma
}

export class RegisterUserUseCase {
    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        name,
        email,
        password,
        photo
    }: RegisterUserUseCaseRequest):  // especifica o tipo e o formato da entrada que deve ser atribuido nessa função
    Promise<RegisterUserUseCaseResponse> { // especifica o tipo e o formato de como será o 'return' desta função. Como usamos async, devemos dizer como será o retorno dessa promise

            const passwordHash = await hash(password, env.HASH_SALT_ROUNDS)

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash,
                    photo
                }
            })

            return { user }
    }

}