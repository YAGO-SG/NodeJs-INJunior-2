import type { Prisma } from "@/@types/prisma/client.js";
import type { UsersRepository } from "../user-repository.js";
import { prisma } from "@/libs/prisma.js";


export class PrismaUsersRepository implements UsersRepository {

   async create(data: Prisma.UserCreateInput) {
        return await prisma.user.create({ data })
    }
    
}