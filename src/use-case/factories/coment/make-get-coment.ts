import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { GetComentUseCase } from "@/use-case/services/coment/get-coment.js"



export function makeGetComentUseCase() {

        const comentRepository = new PrismaComentRepository()

        const getComentsUseCase = new GetComentUseCase( comentRepository )

        return getComentsUseCase
}