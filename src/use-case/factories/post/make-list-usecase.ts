import { PrismaPostRepository } from "@/repositories/prisma/post-prisma-repository.js";
import { listPostUseCase } from "@/use-case/post/list-post.js";

export function makelistUseCase() {

        const postRepository = new PrismaPostRepository()

        const ListPostUseCase = new listPostUseCase( postRepository )

        return ListPostUseCase
}