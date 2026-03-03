import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js"
import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js"
import { CreateComentUseCase } from "@/use-case/services/coment/create-coment.js"


export function makeCreateComentUseCase() {

        const usersRepository = new PrismaUsersRepository()

        const postRepository = new PrismaPostRepository()

        const comentRepository = new PrismaComentRepository()

        const createComentUseCase = new CreateComentUseCase( comentRepository ,usersRepository, postRepository)

        return createComentUseCase
}