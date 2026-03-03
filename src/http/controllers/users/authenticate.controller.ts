import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { UserPresenter } from "@/http/presenters/user-presenter.js"
import { makeAuthenticateUseCase } from "@/use-case/factories/make-authenticate.js"

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {

    try {
        
    const authenticateBodySchema = z.object({
        name: z.string().trim().min(1).max(100).optional(),
        email: z.string().min(1).optional(),
        password: z.string().min(8).max(100),
    })

    const { name, email, password } = authenticateBodySchema.parse(request.body)

    const authenticateUseCase = makeAuthenticateUseCase()
    const { user } = await authenticateUseCase.execute({
        login: name ?? email!,
        password
    })

    const token = await reply.jwtSign({
        sub: user.publicId,
        role: user.role
    },
    { expiresIn: '1d'},
    )

    return reply.status(200).send({token ,user: UserPresenter.toHTTP(user), })
    } catch (error) {
        throw new Error("Erro")
    }

}