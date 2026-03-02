import type { FastifyInstance } from "fastify";
import { usersRoutes } from "./users/user.routes.js";
import { postRoutes } from "./posts/post.routes.js";
import { likeRoutes } from "./like/like.routes.js";
import { comentRoutes } from "./coment/coment.routes.js";

export async function appRoutes(app: FastifyInstance) {
    app.register(usersRoutes, { prefix: '/users'})

    app.register(postRoutes, { prefix: '/posts'})

    app.register(likeRoutes, { prefix: '/likes'})

    app.register(comentRoutes, { prefix: '/coments'})
}