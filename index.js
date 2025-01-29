import express from "express";
const app = express();

const port = 3000;

app.get("/hello", (_req, res) => {
  res.send("Hello World from Barcelona!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
