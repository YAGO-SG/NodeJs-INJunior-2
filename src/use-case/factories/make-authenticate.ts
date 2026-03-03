import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { AuthenticateUserUseCase } from "../services/users/authenticate.js";

export function makeAuthenticateUseCase() {
   
    const userRepository = new PrismaUsersRepository()

    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)

    return authenticateUserUseCase
}