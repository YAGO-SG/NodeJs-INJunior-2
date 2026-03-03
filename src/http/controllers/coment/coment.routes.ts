import type { FastifyInstance } from "fastify";
import { createComent } from "./create-coment.controlls.js";
import { verifyJwt } from "@/http/middlewares/verify-jwt.js";


export async function comentRoutes(app: FastifyInstance) {
    app.post('/:publicId', { onRequest: [verifyJwt]}, createComent);
}