import type { Coment } from "@/@types/prisma/client.js"
import type { ComentRepository } from "@/repositories/coment-prisma.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface userComentsUseCaseRequest {
    publicId: string // publicId do Usuário que irá fazer o post
}

type userComentsUseCaseResponse = {
    coments: Coment[]
}



export class userComentsUseCase {
    constructor ( private comentRepository: ComentRepository,
        private UsersRepository: UsersRepository,
    ) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,

    }: userComentsUseCaseRequest): Promise<userComentsUseCaseResponse> {

        const user = await this.UsersRepository.listOne( publicId )

        if (!user) {
            throw new Error("usuário não encontrado")
        }

        const coments = await this.comentRepository.listUsercoments( user.id )


        return { coments }  
    }

}