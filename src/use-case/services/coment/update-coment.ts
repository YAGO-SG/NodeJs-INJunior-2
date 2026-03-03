import type { Coment } from "@/@types/prisma/client.js"
import type { ComentRepository } from "@/repositories/coment-prisma.js"


interface UpdateComentUseCaseRequest {
  content: string
  publicId: string
}

type UpdateComentUseCaseReply = {
  coment: Coment
}

export class UpdateComentUseCase {
  constructor(
    private comentRepository: ComentRepository,
  ) {}

  async execute({
    content,
    publicId,
  }: UpdateComentUseCaseRequest): Promise<UpdateComentUseCaseReply> {

    const comentFind = await this.comentRepository.get( publicId )

    if (!comentFind) {
        throw new Error("comentário não encontrado")
    }
    
    const coment = await this.comentRepository.update(comentFind.id, { content })

    return { coment }
  }
}