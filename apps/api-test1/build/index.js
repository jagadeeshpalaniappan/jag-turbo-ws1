"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
var app = (0, express_1["default"])();
var port = process.env.PORT || 3030; // default port to listen
app.get("/api", function (req, res) {
    var randomId = "".concat(Math.random()).slice(2);
    var path = "/api/item/".concat(randomId);
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.end("Hello! Fetch one item: <a href=\"".concat(path, "\">").concat(path, "</a>"));
});
app.get("/api/item/:itemId", function (req, res) {
    var itemId = req.params.itemId;
    res.json({ itemId: itemId });
});
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("Server started at http://localhost:".concat(port));
});
module.exports = app;
