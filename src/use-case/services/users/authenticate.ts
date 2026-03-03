import type { User } from "@/@types/prisma/client.js"
import type { UsersRepository } from '@/repositories/user-repository.js'
import { compare } from "bcryptjs"

interface AuthenticateUserUseCaseRequest {
    login: string
    password: string
}

type AuthenticateUserUseCaseResponse = {
    user: User
}

export class AuthenticateUserUseCase {
    constructor( private usersRepository: UsersRepository) {}

    async execute({
        login, password
    }: AuthenticateUserUseCaseRequest): Promise<AuthenticateUserUseCaseResponse> {
        const user = await this.usersRepository.findByEmailOrname(login, login)

        if (!user) { 
            throw new Error("credenciais invalidas")
        }

        const doesPasswordMatches = await compare(password, user.password)

        if (!doesPasswordMatches) {
            throw new Error("credenciais invalidas")
        }

        return { user }
    }
}