import type { Post } from "@/@types/prisma/client.js"
import type { PostsRepository } from "@/repositories/post-repository.js"

type listPostUseCaseResponse = {
    posts: Post[]
}


export class listPostUseCase {
    constructor ( private PostsRepository: PostsRepository) {}

    async execute(): Promise<listPostUseCaseResponse> { 

        const posts = await this.PostsRepository.list()
        
        return { posts }  
    }

}