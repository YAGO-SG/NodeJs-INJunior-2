import type { Prisma, User } from "@/@types/prisma/client.js";
// Aqui vamos armazenar todas as chamadas do prisma, ou seja, sempre que usarmos o prisma para o user será aqui que devemos usar

export interface UsersRepository {
    create(data: Prisma.UserCreateInput ): Promise<User>
    list(): Promise<User[]>
    findBy(where: Prisma.UserWhereInput): Promise< User | null>
    findByEmailOrname(email: string, name: string): Promise<User | null>
    listOne(publicId: string): Promise<User | null>
    delete(id: number): Promise<void>
    update(id: number, data: Prisma.UserUpdateInput): Promise <User>
}