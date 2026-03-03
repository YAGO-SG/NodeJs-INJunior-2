import type { FastifyInstance } from "fastify";
import { register } from "./register.controller.js";
import { listUsers } from "./listUsers.controller.js";
import { deleteUser } from "./delete-user.controller.js";
import { patchUser } from "./patch-user.controller.js";
import { listOneUser } from "./list-one-user.controller.js";
import { authenticate } from "./authenticate.controller.js";
import { verifyJwt } from "@/http/middlewares/verify-jwt.js";

export async function usersRoutes(app: FastifyInstance) {
    app.post('/', register);
    app.post('/authenticate', authenticate);
    app.get('/list', listUsers);
    app.delete('/delete/:publicId', { onRequest: [verifyJwt]}, deleteUser);
    app.patch('/update/:publicId', { onRequest: [verifyJwt]}, patchUser);
    app.get('/user/:publicId', listOneUser);
}