import type { Prisma, Post } from "@/@types/prisma/client.js";
// Aqui vamos armazenar todas as chamadas do prisma, ou seja, sempre que usarmos o prisma para o user será aqui que devemos usar

export interface PostsRepository {
    create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
    findBy(where: Prisma.PostWhereInput): Promise<Post | null>
    delete(id: number): Promise<void>
    list(): Promise<Post[]>
    listUserPosts(authorId: number): Promise<Post[]>
}