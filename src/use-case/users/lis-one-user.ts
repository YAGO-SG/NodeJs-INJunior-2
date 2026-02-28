import type { User } from "@/@types/prisma/client.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface listOneUserUseCaseRequest {
    publicId: string
}

type listOneUserUseCaseResponse = {
    user: User // o User é uma importação do meu modelo feito dentro do schema.prisma
}


export class listOneUserUseCase {
    constructor ( private UsersRepository: UsersRepository) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId
    }: listOneUserUseCaseRequest):  // especifica o tipo e o formato da entrada que deve ser atribuido nessa função
    Promise<listOneUserUseCaseResponse> { // especifica o tipo e o formato de como será o 'return' desta função. Como usamos async, devemos dizer como será o retorno dessa promise

            const user = await this.UsersRepository.listOne( publicId )

            if (!user) {
                throw new Error("usuário não encontrado")
            }

            return { user }
    }
}

