import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { DeleteComentUseCase } from "@/use-case/services/coment/delete-coment.js"



export function makeDeleteComentUseCase() {

        const comentRepository = new PrismaComentRepository()

        const deleteComentsUseCase = new DeleteComentUseCase( comentRepository )

        return deleteComentsUseCase
}