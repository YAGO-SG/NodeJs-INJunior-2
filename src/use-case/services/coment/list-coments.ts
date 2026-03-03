import type { Coment } from "@/@types/prisma/client.js"
import type { ComentRepository } from "@/repositories/coment-prisma.js"


type ListComentUseCaseReply = {
  coments: Coment[]
}

export class ListComentUseCase {
  constructor(
    private comentRepository: ComentRepository,
  ) {}

  async execute(): Promise<ListComentUseCaseReply> {

    const coments = await this.comentRepository.list()

    return { coments }
  }
}