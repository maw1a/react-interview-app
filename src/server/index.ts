import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

// GET /api/toggle — simulate reading state from DB
app.get("/api/toggle", async (c) => {
  await new Promise((r) => setTimeout(r, 1000));
  const state = Math.random() > 0.5;
  return c.json({ success: true, state });
});

// POST /api/toggle — simulate persisting state to DB
app.post("/api/toggle", async (c) => {
  const body = await c.req.json<{ state: boolean }>();

  if (typeof body.state !== "boolean") {
    return c.json({ success: false, error: "state must be a boolean" }, 400);
  }

  await new Promise((r) => setTimeout(r, 2000));
  return c.json({ success: true, state: body.state });
});

// Serve built client assets in production
app.use("/*", serveStatic({ root: "./dist/client" }));

serve({ fetch: app.fetch, port: 3001 }, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});
