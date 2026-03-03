import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { makeCreateComentUseCase } from "@/use-case/factories/coment/make-create-usecase.js"
import { ComentPresenter } from "@/http/presenters/coment-presenter.js"




export async function createComent(request: FastifyRequest, reply: FastifyReply) {

    const createParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = createParamsSchema.parse(request.params)

    const createBodySchema = z.object({
        content: z.string()
    })

    const { content } = createBodySchema.parse(request.body)

    const loggedUser = request.user as {
      sub: string
      role: 'ADMIN' | 'DEFAULT'
    }

    const createComentUseCase = makeCreateComentUseCase()
    const { coment } = await createComentUseCase.execute({
        content,
        userPublicId: loggedUser.sub,
        publicId,
    })

    return reply.status(201).send(ComentPresenter.toHTTP(coment))
}