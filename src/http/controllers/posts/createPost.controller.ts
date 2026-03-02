import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { makeCreateUseCase } from '@/use-case/factories/post/make-create-usecase.js'
import { PostPresenter } from '@/http/presenters/post-presenter.js'

export async function createPost(req: FastifyRequest, res: FastifyReply) {

    const PostParamsSchema = z.object({
        publicId: z.string()
    })

    const { publicId } = PostParamsSchema.parse(req.params)

    const PostBodySchema = z.object({
        title: z.string(),
        content: z.string()
    })

    const { title, content} = PostBodySchema.parse(req.body);

    const createPostUseCase = makeCreateUseCase()
    const { post } = await createPostUseCase.execute({
        publicId,
        title,
        content,
    })

    return res.status(201).send(PostPresenter.toHTTP(post))
}

