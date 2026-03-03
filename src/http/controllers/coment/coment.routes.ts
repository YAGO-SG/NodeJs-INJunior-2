import type { FastifyInstance } from "fastify";
import { createComent } from "./create-coment.controlls.js";
import { verifyJwt } from "@/http/middlewares/verify-jwt.js";
import { listComent } from "./list-coments.controller.js";
import { getComent } from "./get-coment.controller.js";


export async function comentRoutes(app: FastifyInstance) {
    app.post('/:publicId', { onRequest: [verifyJwt]}, createComent);
    app.get('/', listComent)
    app.get('/:publicId', getComent)
}