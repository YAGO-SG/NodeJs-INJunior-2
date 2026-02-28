import type { User } from "@/@types/prisma/client.js";

type HTTPUser = { //define o modelo do que vai ser retornado para o usuário
    id: string,
    name: string,
    email:string,
    photo: string,
}

export class UserPresenter {
    static toHTTP(user: User): HTTPUser
    static toHTTP(users: User[]): HTTPUser[]
    static toHTTP(input: User | User[]): HTTPUser | HTTPUser[] {
        if (Array.isArray(input)) {
            return input.map((user) => this.toHTTP(user))
        }

        return { // define o que será retornado para o usuário
            id: input.publicId,
            name: input.name,
            email: input.email,
            photo: input.photo
        }
    }
}