import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { ComentPresenter } from "@/http/presenters/coment-presenter.js"
import { makeGetComentUseCase } from "@/use-case/factories/coment/make-get-coment.js"




export async function getComent(req: FastifyRequest, rep: FastifyReply) {

    const getParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = getParamsSchema.parse(req.params)

    const getComentUseCase = makeGetComentUseCase()

    const { coment } = await getComentUseCase.execute({ publicId })

    return rep.status(201).send(ComentPresenter.toHTTP(coment))
}