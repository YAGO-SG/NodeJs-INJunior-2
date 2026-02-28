import type { UsersRepository } from "@/repositories/user-repository.js"


interface deleteUserUseCaseRequest {
    publicId: string
}

export class deleteUserUseCase {
    constructor ( private UsersRepository: UsersRepository) {}

    async execute({
        publicId
    }: deleteUserUseCaseRequest) { 
        
        const user = await this.UsersRepository.listOne( publicId )

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        await this.UsersRepository.delete(user.id)
    }
}
