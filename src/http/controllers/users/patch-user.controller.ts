import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod'
import { hash } from "bcryptjs";
import { env } from "@/env/index.js";
import { makeUpdateUseCase } from "@/use-case/factories/user/make-update-usecase.js";
import { UserPresenter } from "@/http/presenters/user-presenter.js";

export async function patchUser(req: FastifyRequest, rep: FastifyReply) {
    try {
        const updateUserParamsSchema = z.object({
            publicId: z.string()
        })

        const { publicId } = updateUserParamsSchema.parse(req.params)

        const updatehUserBodySchema = z.object({
            name: z.string().trim().min(1).max(100).optional(),
            email: z.email().max(100).optional(),
            password: z.string().min(8).max(100).optional(),
            photo: z.string().optional(),
        })

        const { name, email, password, photo} = updatehUserBodySchema.parse(req.body)

        let passwordHash: string | undefined
        if (password !== undefined ) {
            passwordHash = await hash(password, env.HASH_SALT_ROUNDS)
        }

        const updateUserUseCase = makeUpdateUseCase()
        const { user } = await updateUserUseCase.execute({
            publicId,
            name,
            email,
            password: passwordHash,
            photo
        })
        
        rep.status(200).send(UserPresenter.toHTTP(user))

    } catch (error) {
        rep.status(400).send(error)
    }
}