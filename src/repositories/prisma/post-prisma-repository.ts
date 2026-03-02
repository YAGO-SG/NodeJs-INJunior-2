import { Prisma } from "@/@types/prisma/client.js";
import type { PostsRepository } from "@/repositories/post-repository.js";
import { prisma } from "@/libs/prisma.js";


export class PrismaPostRepository implements PostsRepository { // implements força a classe a seguir um contrato específico, no nosso caso usamos o nosso artquivo register.ts

    async create(data: Prisma.PostUncheckedCreateInput) {
        return await prisma.post.create({ data })
    }

    async findBy(where: Prisma.PostWhereInput) {
        return prisma.post.findFirst({
            where
        })
    }

    async delete( id: number) {
        await prisma.post.delete({
            where: { id }
        })
    }

    async list() {
        return await prisma.post.findMany()
    }
}