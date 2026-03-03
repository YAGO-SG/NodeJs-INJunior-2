import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { UpdateComentUseCase } from "@/use-case/services/coment/update-coment.js"


export function makeUpdateComentUseCase() {

        const comentRepository = new PrismaComentRepository()

        const updateComentsUseCase = new UpdateComentUseCase( comentRepository )

        return updateComentsUseCase
}