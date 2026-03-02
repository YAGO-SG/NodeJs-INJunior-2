import { PostPresenter } from "@/http/presenters/post-presenter.js";
import { makeGetUseCase } from "@/use-case/factories/post/make-get-usecase.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'


export async function listOnePost( req: FastifyRequest, rep: FastifyReply) {
    
    const getParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = getParamsSchema.parse(req.params)

    const getPostUseCase = makeGetUseCase()
    const { post } = await getPostUseCase.execute({
        publicId
    })

    return rep.status(200).send(PostPresenter.toHTTP(post))
}