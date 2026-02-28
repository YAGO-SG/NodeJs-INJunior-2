import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { deleteUserUseCase } from "@/use-case/users/delete-user.js";

export function makeDeleteUserUseCase() {

    const userrepository = new PrismaUsersRepository()

    const DeleteUserUseCase = new deleteUserUseCase(userrepository)

    return DeleteUserUseCase;
}