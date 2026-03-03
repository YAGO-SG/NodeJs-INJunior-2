import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { ListComentUseCase } from "@/use-case/services/coment/list-coments.js"


export function makelistComentUseCase() {

        const comentRepository = new PrismaComentRepository()

        const listComentsUseCase = new ListComentUseCase( comentRepository )

        return listComentsUseCase
}