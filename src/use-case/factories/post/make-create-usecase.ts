import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js";
import { PrismaUsersRepository } from "@/repositories/prisma/user-prisma-repository.js";
import { createPostUseCase } from "@/use-case/services/post/create-post.js";

export function makeCreateUseCase() {

        const usersRepository = new PrismaUsersRepository()

        const postRepository = new PrismaPostRepository()

        const CreatePostUseCase = new createPostUseCase( postRepository ,usersRepository)

        return CreatePostUseCase
}
