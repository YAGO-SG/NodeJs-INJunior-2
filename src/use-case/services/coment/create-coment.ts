import type { Coment } from "@/@types/prisma/client.js"
import type { ComentRepository } from "@/repositories/coment-prisma.js"
import type { PostsRepository } from "@/repositories/post-repository.js"
import type { UsersRepository } from "@/repositories/user-repository.js"


interface CreateComentUseCaseRequest {
  content: string
  userPublicId: string
  publicId: string
}

type CreateComentUseCaseReply = {
  coment: Coment
}

export class CreateComentUseCase {
  constructor(
    private comentRepository: ComentRepository,
    private usersRepository: UsersRepository,
    private postsRepository: PostsRepository
  ) {}

  async execute({
    content,
    userPublicId,
    publicId,
  }: CreateComentUseCaseRequest): Promise<CreateComentUseCaseReply> {

    const user = await this.usersRepository.listOne(userPublicId)

    if (!user) {
      throw new Error("usuário não encontrado")
    }
    const post = await this.postsRepository.findBy({ publicId })

    if (!post) {
      throw new Error("post não encontrado")
    }

    const coment = await this.comentRepository.create({
      content,
      authorId: user.id,
      postId: post.id,
    })

    return { coment }
  }
}