import { ComentPresenter } from "@/http/presenters/coment-presenter.js";
import { makeUserComentsComentUseCase } from "@/use-case/factories/coment/make-user-coments.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'

export async function userComents( req: FastifyRequest, rep: FastifyReply) {
    try {
        const useComentsParamsSchema = z.object({
            publicId: z.string()
        })

        const { publicId } = useComentsParamsSchema.parse(req.params)

        const useComentsUseCase = makeUserComentsComentUseCase()
        
        const { coments } = await useComentsUseCase.execute({ publicId })

        return rep.status(200).send(ComentPresenter.toHTTP(coments))

    } catch (error) {
        rep.status(400).send(error)
    }

}