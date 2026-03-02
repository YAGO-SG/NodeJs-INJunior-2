import type { User } from "@/@types/prisma/client.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface updateUserUseCaseRequest {
    publicId: string,
    name?: string,
    email?: string,
    password?: string,
    photo?: string,
}

type updateUserUseCaseResponse = {
    user: User // o User é uma importação do meu modelo feito dentro do schema.prisma
}


export class updateUserUseCase {
    constructor ( private UsersRepository: UsersRepository) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,
        name,
        email,
        password,
        photo

    }: updateUserUseCaseRequest):  // especifica o tipo e o formato da entrada que deve ser atribuido nessa função
    Promise<updateUserUseCaseResponse> { // especifica o tipo e o formato de como será o 'return' desta função. Como usamos async, devemos dizer como será o retorno dessa promise

            const userfind = await this.UsersRepository.listOne( publicId )

            if (!userfind) {
                throw new Error("usuário não encontrado")
            }

            const data = { name, email, password, photo}

            const user = await this.UsersRepository.update(userfind.id, data)

            return { user }

    }
}