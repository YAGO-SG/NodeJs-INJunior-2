import type { Prisma, Coment } from "@/@types/prisma/client.js";

export interface ComentRepository {
        create(data: Prisma.ComentUncheckedCreateInput): Promise<Coment> 
        list(): Promise<Coment[]>
}