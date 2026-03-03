import type { ComentRepository } from "@/repositories/coment-prisma.js"


interface DeleteComentUseCaseRequest {
  publicId: string
}

export class DeleteComentUseCase {
  constructor(
    private comentRepository: ComentRepository,
  ) {}

  async execute({
    publicId,
  }: DeleteComentUseCaseRequest) {

    const coment = await this.comentRepository.get(publicId)

    if (!coment) {
      throw new Error("Este comentário não existe")
    }

    await this.comentRepository.delete( coment.id )
  }
}