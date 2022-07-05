import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const todos = [
  { id: "t1", name: "Todo1" },
  { id: "t2", name: "Todo2" },
  { id: "t3", name: "Todo3" },
];

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/health", (req, res) => {
      return res.json({ ok: true });
    })
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/todos", (req, res) => {
      return res.json(todos);
    });

  return app;
};
