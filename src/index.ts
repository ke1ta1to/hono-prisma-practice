import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", async (c) => {
  const todos = await prisma.todo.findMany();
  return c.json(todos);
});

app.get("/add-sample-todos", async (c) => {
  const sampleTodos = [
    { title: "Learn Hono", completed: false },
    { title: "Learn Prisma", completed: false },
    { title: "Build a web app", completed: false },
  ];
  await prisma.todo.createMany({ data: sampleTodos });
  return c.text("Sample todos added successfully!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
