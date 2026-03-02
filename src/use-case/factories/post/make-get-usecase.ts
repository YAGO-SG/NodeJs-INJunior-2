import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js";
import { getPostUseCase } from "@/use-case/post/get-post.js";

export function makeGetUseCase() {

        const postRepository = new PrismaPostRepository()

        const CreatePostUseCase = new getPostUseCase( postRepository )

        return CreatePostUseCase
}