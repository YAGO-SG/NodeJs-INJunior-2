import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js";
import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { userPostsPostUseCase } from "@/use-case/post/user-post-list.js";

export function makeUsePostUseCase() {

        const usersRepository = new PrismaUsersRepository()

        const postRepository = new PrismaPostRepository()

        const UserPostPostUseCase = new userPostsPostUseCase( postRepository ,usersRepository)

        return UserPostPostUseCase
}