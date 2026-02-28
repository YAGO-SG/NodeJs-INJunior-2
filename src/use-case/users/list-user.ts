import type { User } from "@/@types/prisma/client.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


type listUserUseCaseResponse = {
    users: User[] // o User é uma importação do meu modelo feito dentro do schema.prisma
}


export class listUserUseCase {
    constructor ( private UsersRepository: UsersRepository) {}

    async execute(): // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
    Promise<listUserUseCaseResponse> { // especifica o tipo e o formato de como será o 'return' desta função. Como usamos async, devemos dizer como será o retorno dessa promise

            const users = await this.UsersRepository.list()

            return { users }
    }

}