import type { Post } from "@/@types/prisma/client.js";

type HTTPPost = { //define o modelo do que vai ser retornado para o usuário
    id: string,
    title: string,
    content:string,
    created_at: Date,
}

export class PostPresenter {
    static toHTTP(post: Post): HTTPPost
    static toHTTP(posts: Post[]): HTTPPost[]
    static toHTTP(input: Post | Post[]): HTTPPost | HTTPPost[] {
        if (Array.isArray(input)) {
            return input.map((post) => this.toHTTP(post))
        }

        return { // define o que será retornado para o usuário
            id: input.publicId,
            title: input.title,
            content: input.content,
            created_at: input.created_at
        }
    }
}