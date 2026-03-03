import type { FastifyRequest, FastifyReply } from "fastify"
import { ComentPresenter } from "@/http/presenters/coment-presenter.js"
import { makelistComentUseCase } from "@/use-case/factories/coment/make-list-coments.js"




export async function listComent(_request: FastifyRequest, reply: FastifyReply) {

    const listComentsUseCase = makelistComentUseCase()
    const { coments } = await listComentsUseCase.execute()

    return reply.status(201).send(ComentPresenter.toHTTP(coments))
}