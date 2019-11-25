var express = require("express");
var app = express();

app.get("/", req, res => {
  res.json({ status: ok });
});

app.listen(3000, () => console.log("Runing on 3000"));
