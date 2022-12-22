import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import sensible from "@fastify/sensible";
import cors from "@fastify/cors";

import { config } from "./config.js";

export const prisma = new PrismaClient();
const app = fastify();

app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

app.get("/posts", async (req, res) => {
  console.log("GET /posts");
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });
  console.log(posts);
  res.send(posts);
});

app.get("/", async (req, res) => {
  res.send({ hello: "world" });
});

async function commitToDB(promise) {
  const [error, data] = app.to(promise);
  console.log(error);
  if (error) {
    console.log(error);
    return app.httpErrors.internalServerError(error);
  }
  return data;
}

app.listen({
  port: config.port,
});
