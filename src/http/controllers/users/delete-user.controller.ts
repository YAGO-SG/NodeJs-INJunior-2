import { makeDeleteUserUseCase } from "@/use-case/factories/user/make-delete-usecase.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'

export async function deleteUser(req: FastifyRequest, rep: FastifyReply) {
    try {
        const deleteParamsSchema = z.object({
            publicId: z.string()
        })

        const { publicId } = deleteParamsSchema.parse(req.params)

        const deleteUserUseCase = makeDeleteUserUseCase()

        await deleteUserUseCase.execute({ publicId })
        
        rep.status(200).send(deleteUser)

    } catch (error) {
        rep.status(400).send(error)
    }
}