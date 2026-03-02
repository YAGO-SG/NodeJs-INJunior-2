import { PostPresenter } from "@/http/presenters/post-presenter.js";
import { makeUsePostUseCase } from "@/use-case/factories/post/make-list-user-posts.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'

export async function userPosts( req: FastifyRequest, rep: FastifyReply) {
    try {
        const userPostParamsSchema = z.object({
            publicId: z.string()
        })

        const { publicId } = userPostParamsSchema.parse(req.params)

        const userPostUseCase = makeUsePostUseCase()
        
        const { posts } = await userPostUseCase.execute({ publicId })

        return rep.status(200).send(PostPresenter.toHTTP(posts))

    } catch (error) {
        rep.status(400).send(error)
    }

}