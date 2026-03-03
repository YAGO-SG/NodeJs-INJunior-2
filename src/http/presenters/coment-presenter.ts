import type { Coment } from "@/@types/prisma/client.js";

type HTTPComent = { //define o modelo do que vai ser retornado para o usuário
    id: string,
    content:string,
    created_at: Date,
}

export class ComentPresenter {
    static toHTTP(post: Coment): HTTPComent
    static toHTTP(posts: Coment[]): HTTPComent[]
    static toHTTP(input: Coment | Coment[]): HTTPComent | HTTPComent[] {
        if (Array.isArray(input)) {
            return input.map((post) => this.toHTTP(post))
        }

        return { // define o que será retornado para o usuário
            id: input.publicId,
            content: input.content,
            created_at: input.created_at
        }
    }
}