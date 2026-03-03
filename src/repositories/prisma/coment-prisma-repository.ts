import { Prisma } from "@/@types/prisma/client.js";
import type { ComentRepository } from "../coment-prisma.js";
import { prisma } from "@/libs/prisma.js";


export class PrismaComentRepository implements ComentRepository { 

    async create(data: Prisma.ComentUncheckedCreateInput) {
        return await prisma.coment.create({ data })
    }

    async list(){
        return await prisma.coment.findMany();
    }

    async get(publicId: string) {
        return await prisma.coment.findUnique({
            where: { publicId }
        })
    }
}