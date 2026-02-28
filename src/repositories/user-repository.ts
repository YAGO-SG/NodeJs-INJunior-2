import type { Prisma, User } from "@/@types/prisma/client.js";
// Aqui vamos armazenar todas as chamadas do prisma, ou seja, sempre que usarmos o prisma para o user será aqui que devemos usar

export interface UsersRepository {
    create(data: Prisma.UserCreateInput ): Promise<User>

    list(): Promise<User[]>
}