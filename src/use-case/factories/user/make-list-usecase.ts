import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { listUserUseCase } from "@/use-case/services/users/list-user.js";

export function makelistUseCase() {
   
    const userRepository = new PrismaUsersRepository()

    const ListUserUseCase = new listUserUseCase(userRepository)

    return ListUserUseCase
}