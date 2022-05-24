import express from "express";

const app = express();

const PORT = 3001;

app.get("/data", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ foo: "bar" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
