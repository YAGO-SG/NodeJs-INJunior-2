import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { RegisterUserUseCase} from "@/use-case/services/users/register.js";

export function makeRegisterUseCase() {

        const usersRepository = new PrismaUsersRepository()

        const registerUserUseCase = new RegisterUserUseCase(usersRepository)

        return registerUserUseCase
}
