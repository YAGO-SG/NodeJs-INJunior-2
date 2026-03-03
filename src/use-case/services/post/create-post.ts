import type { Post } from "@/@types/prisma/client.js"
import type { PostsRepository } from "@/repositories/post-repository.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface createPostUseCaseRequest {
    publicId: string // publicId do Usuário que irá fazer o post
    title: string,
    content: string,
}

type createPostUseCaseResponse = {
    post: Post 
}



export class createPostUseCase {
    constructor ( private PostsRepository: PostsRepository,
        private UsersRepository: UsersRepository,
    ) {}

    async execute({ // uma função, quando dentro de uma classe nos chamamos de método. O nome 'execute' é uma convensão 
        publicId,
        title,
        content,

    }: createPostUseCaseRequest):  // especifica o tipo e o formato da entrada que deve ser atribuido nessa função
    Promise<createPostUseCaseResponse> { // especifica o tipo e o formato de como será o 'return' desta função. Como usamos async, devemos dizer como será o retorno dessa promise

        const  userFind  = await this.UsersRepository.listOne( publicId )

        if (!userFind) {
            throw new Error("usuário não encontrado")
        }

        const post = await this.PostsRepository.create({
            title,
            content,
            authorId: userFind.id
        })
        
        return { post }  
    }

}