import { UserPresenter } from "@/http/presenters/user-presenter.js";
import { makeListOneUseCase } from "@/use-case/factories/user/make-listOne-usecase.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'

export async function listOneUser( req: FastifyRequest, rep: FastifyReply) {
    
    const listOneParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = listOneParamsSchema.parse(req.params)

    const listOneUseCase = makeListOneUseCase()
    
    const { user } = await listOneUseCase.execute({ publicId })

    rep.status(200).send(UserPresenter.toHTTP(user))
}