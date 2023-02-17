const express = require("express");
const app = express();
const port = process.env.port || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// actions

const pLanguages = [];

// routes
app.get("/", (req, res) => {
  res.render("index", { langs: pLanguages });
});

app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`EJS app listening on port http://localhost:${port}`);
});
