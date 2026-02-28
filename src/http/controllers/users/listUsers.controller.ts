import { UserPresenter } from '@/http/presenters/user-presenter.js';
import { makelistUseCase } from '@/use-case/factories/user/make-list-usecase.js';
import type { FastifyRequest , FastifyReply } from 'fastify';

export async function listUsers(_request: FastifyRequest, reply: FastifyReply) {

    const listUserUseCase = makelistUseCase()
    const { users } = await listUserUseCase.execute()

    return reply.status(200).send(UserPresenter.toHTTP(users))
}