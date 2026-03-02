import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js"
import { updateUserUseCase } from "@/use-case/users/update-user.js"

export function makeUpdateUseCase() {

    const userRepository = new PrismaUsersRepository();
    
    const userUpdate = new updateUserUseCase(userRepository);

    return userUpdate
}