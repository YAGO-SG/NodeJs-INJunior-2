import type { Prisma, Coment } from "@/@types/prisma/client.js";

export interface ComentRepository {
        create(data: Prisma.ComentUncheckedCreateInput): Promise<Coment> 
        list(): Promise<Coment[]>
        get(publicId: string): Promise<Coment | null>
        delete(id: number): Promise<void>
        update(id: number, data: Prisma.ComentUpdateInput): Promise<Coment>
        listUsercoments(authorId: number): Promise<Coment[]>
}