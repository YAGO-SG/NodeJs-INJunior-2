import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { ComentPresenter } from "@/http/presenters/coment-presenter.js"
import { makeUpdateComentUseCase } from "@/use-case/factories/coment/make-update-usecase.js"




export async function UpdateComent(request: FastifyRequest, reply: FastifyReply) {

    const UpdateParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = UpdateParamsSchema.parse(request.params)

    const UpdateBodySchema = z.object({
        content: z.string()
    })

    const { content } = UpdateBodySchema.parse(request.body)

    const updateComentUseCase = makeUpdateComentUseCase()
    const { coment } = await updateComentUseCase.execute({
        content,
        publicId
    })

    return reply.status(201).send(ComentPresenter.toHTTP(coment))
}