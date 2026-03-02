import type { Post } from "@/@types/prisma/client.js"
import type { PostsRepository } from "@/repositories/post-repository.js"


interface getPostUseCaseRequest {
    publicId: string // publicId do Usuário que irá fazer o post
}

type getPostUseCaseResponse = {
    post: Post 
}



export class getPostUseCase {
    constructor ( private PostsRepository: PostsRepository) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,
    }: getPostUseCaseRequest): Promise<getPostUseCaseResponse> { 


        const post = await this.PostsRepository.findBy({ publicId });

        if (!post) {
            throw new Error("usuário não encontrado")
        }
        
        return { post }  
    }

}