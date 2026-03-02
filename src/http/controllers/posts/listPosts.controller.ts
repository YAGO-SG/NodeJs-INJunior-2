import { makelistUseCase } from "@/use-case/factories/post/make-list-usecase.js";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function listPosts(_req: FastifyRequest, rep: FastifyReply) {
    
    const listPostUseCase = makelistUseCase()
    const { posts } = await listPostUseCase.execute()

    return rep.status(200).send(posts)
}