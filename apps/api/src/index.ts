import { createServer } from "./server";

const port = process.env.PORT || 5001;
const app = createServer();

app.listen(port, () => {
  console.log(`api running on ${port}`);
});

module.exports = app;
