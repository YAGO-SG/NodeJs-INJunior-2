import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { makeDeleteComentUseCase } from "@/use-case/factories/coment/make-delete-coment.usecase.js"


export async function deleteComent(req: FastifyRequest, _rep: FastifyReply) {

    const deleteParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = deleteParamsSchema.parse(req.params)

    const DeleteComentUseCase = makeDeleteComentUseCase()
    await DeleteComentUseCase.execute({ publicId })
}