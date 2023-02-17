const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`EJS app listening on port http://localhost:${port}`);
});
