import type { Post } from "@/@types/prisma/client.js"
import type { PostsRepository } from "@/repositories/post-repository.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface userPostsPostUseCaseRequest {
    publicId: string // publicId do Usuário que irá fazer o post
}

type userPostsPostUseCaseResponse = {
    posts: Post[]
}



export class userPostsPostUseCase {
    constructor ( private PostsRepository: PostsRepository,
        private UsersRepository: UsersRepository,
    ) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,

    }: userPostsPostUseCaseRequest): Promise<userPostsPostUseCaseResponse> {

        const user = await this.UsersRepository.listOne( publicId )

        if (!user) {
            throw new Error("usuário não encontrado")
        }

        const posts = await this.PostsRepository.listUserPosts( user.id )


        return { posts }  
    }

}