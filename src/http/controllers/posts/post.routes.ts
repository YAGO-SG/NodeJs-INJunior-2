import type { FastifyInstance } from "fastify";
import { createPost } from "./createPost.controller.js";
import { listPosts } from "./listPosts.controller.js";
import { userPosts } from "./user-posts.controller.js";
import { deletePost } from "./delete-post.controller.js";
import { patchPost } from "./patch-post.controller.js";
import { listOnePost } from "./list-one-post.controller.js";
import { verifyJwt } from "@/http/middlewares/verify-jwt.js";

export async function postRoutes(app: FastifyInstance) {
    app.post('/:publicId', { onRequest: [verifyJwt]}, createPost);
    app.get('/list', listPosts);
    app.get('/listUserPost/:publicId', userPosts)
    app.delete('/delete/:publicId', { onRequest: [verifyJwt]}, deletePost);
    app.patch('/update/:publicId', { onRequest: [verifyJwt]}, patchPost)
    app.get('/list/:publicId', listOnePost)
}