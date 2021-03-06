import express from "express";
import { Request, Response } from "express";
// import cors from "cors"; // for CORS setup, usage: app.use(cors());

const app = express();

app.get("/api", (req, res) => {
  const path = `/api/item/1234`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello -- v1! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
