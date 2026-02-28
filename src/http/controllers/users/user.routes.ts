import type { FastifyInstance } from "fastify";
import { register } from "./register.controller.js";
import { listUsers } from "./listUsers.controller.js";
import { deleteUser } from "./delete-user.controller.js";
import { patchUser } from "./patch-user.controller.js";
import { listOneUser } from "./list-one-user.controller.js";

export async function usersRoutes(app: FastifyInstance) {
    app.post('/', register);
    app.get('/list', listUsers);
    app.delete('/delete/:publicId', deleteUser);
    app.patch('/update/:publicId', patchUser);
    app.get('/user/:publicId', listOneUser);
}