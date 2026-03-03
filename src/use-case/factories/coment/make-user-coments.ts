import { PrismaComentRepository } from "@/repositories/prisma/coment-prisma-repository.js"
import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js"
import { userComentsUseCase } from "@/use-case/services/coment/user-coments.js"


export function makeUserComentsComentUseCase() {

        const comentRepository = new PrismaComentRepository()

        const userRepository = new PrismaUsersRepository()

        const UserComentsComentsUseCase = new userComentsUseCase( comentRepository, userRepository )

        return UserComentsComentsUseCase
}