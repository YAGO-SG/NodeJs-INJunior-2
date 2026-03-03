import type { Coment } from "@/@types/prisma/client.js"
import type { ComentRepository } from "@/repositories/coment-prisma.js"


interface GetComentUseCaseRequest {
  publicId: string
}

type GetComentUseCaseReply = {
  coment: Coment
}

export class GetComentUseCase {
  constructor(
    private comentRepository: ComentRepository,
  ) {}

  async execute({
    publicId,
  }: GetComentUseCaseRequest): Promise<GetComentUseCaseReply> {

    const  coment  = await this.comentRepository.get( publicId )

    if (!coment) {
        throw new Error("comentário não encontrado")
    }

    return { coment }
  }
}