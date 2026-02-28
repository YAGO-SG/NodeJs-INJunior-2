
import { PrismaUsersRepository } from '@/repositories/prisma/user-prisma-repository.js';
import { listOneUserUseCase } from '@/use-case/users/lis-one-user.js';

export function makeListOneUseCase() {
    
    const userrepository = new PrismaUsersRepository()

    const ListOneUseCase = new listOneUserUseCase(userrepository)

    return ListOneUseCase
}