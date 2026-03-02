import { makeDeleteUseCase } from "@/use-case/factories/post/make-delete-usecase.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'


export async function deletePost(req: FastifyRequest, rep: FastifyReply) {
    try {
        const deleteParamsSchema = z.object({
            publicId: z.string(),
        })

        const { publicId } = deleteParamsSchema.parse(req.params)

        const DeletePostUseCase = makeDeleteUseCase()
        await DeletePostUseCase.execute({ publicId })

    } catch (error) {
        rep.status(400).send(error)
    }
}