const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Caio");
});

app.listen(3333);
