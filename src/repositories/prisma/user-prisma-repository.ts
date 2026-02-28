import { Prisma } from "@/@types/prisma/client.js";
import type { UsersRepository } from "../user-repository.js";
import { prisma } from "@/libs/prisma.js";


export class PrismaUsersRepository implements UsersRepository { // implements força a classe a seguir um contrato específico, no nosso caso usamos o nosso artquivo register.ts

    async create(data: Prisma.UserCreateInput) {
        return await prisma.user.create({ data })
    }


    async list() {
        return await prisma.user.findMany()
    }

    async listOne(publicId: string) {
        return await prisma.user.findUnique({
            where: { publicId }
        })
    }
    
    async delete(id: number) {
        await prisma.user.delete({
            where: {
                id
            }
        })
    }
}