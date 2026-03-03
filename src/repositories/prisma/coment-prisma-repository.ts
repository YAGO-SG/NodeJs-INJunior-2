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

    async delete(id: number){
        await prisma.coment.delete({
            where: { id }
        })
    }

    async update(id: number, data: Prisma.ComentUpdateInput) {
        return await prisma.coment.update({
            where: { id },
            data
        })
    }

    async listUsercoments(id: number) {
        return await prisma.coment.findMany({
            where: {
                authorId: id
            }
        })
    }
}