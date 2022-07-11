"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
var app = (0, express_1["default"])();
app.get("/api", function (req, res) {
  var path = "/api/item/1234";
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(
    'Hello! Go to item: <a href="'.concat(path, '">').concat(path, "</a>")
  );
});
app.get("/api/item/:slug", function (req, res) {
  var slug = req.params.slug;
  res.end("Item: ".concat(slug));
});
module.exports = app;
