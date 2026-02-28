import { z } from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { makeRegisterUseCase } from "@/use-case/factories/make-register-usecase.js"




export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string().trim().min(1).max(100),
        email: z.email().max(100),
        password: z.string().min(8).max(100),
        photo: z.string(),
    })

    const { name, email, password, photo} = registerBodySchema.parse(request.body)

    const registerUserUseCase = makeRegisterUseCase()
    const { user } = await registerUserUseCase.execute({
        name,
        email,
        password,
        photo
    })

    return reply.status(201).send(user)
}