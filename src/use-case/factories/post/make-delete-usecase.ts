import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js";
import { deletePostUseCase } from "@/use-case/post/delete-post.js";

export function makeDeleteUseCase() {

        const postRepository = new PrismaPostRepository()

        const DeletePostUseCase = new deletePostUseCase( postRepository )

        return DeletePostUseCase
}