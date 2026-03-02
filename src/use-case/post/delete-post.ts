import type { PostsRepository } from "@/repositories/post-repository.js"


interface deletePostUseCaseRequest {
    publicId: string 
}


export class deletePostUseCase {
    constructor ( private PostsRepository: PostsRepository) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,
    }: deletePostUseCaseRequest) {

        const postFind = await this.PostsRepository.findBy({ publicId })
        
        if (!postFind) {
            throw new Error("Post não encontrado")
        }

        await this.PostsRepository.delete( postFind.id )
    }

}