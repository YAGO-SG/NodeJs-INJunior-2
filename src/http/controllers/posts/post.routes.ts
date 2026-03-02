import type { FastifyInstance } from "fastify";
import { createPost } from "./createPost.controller.js";
import { listPosts } from "./listPosts.controller.js";
import { userPosts } from "./user-posts.controller.js";
import { deletePost } from "./delete-post.controller.js";
import { patchPost } from "./patch-post.controller.js";
import { listOnePost } from "./list-one-post.controller.js";

export async function postRoutes(app: FastifyInstance) {
    app.post('/:publicId', createPost);
    app.get('/list', listPosts);
    app.get('/listUserPost/:publicId', userPosts)
    app.delete('/delete/:publicId', deletePost);
    app.patch('/update/:publicId', patchPost)
    app.get('/list/:publicId', listOnePost)
}