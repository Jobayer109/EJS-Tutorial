const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// actions
const pLanguages = [];

// routes
app.get("/", (req, res) => {
  // res.send("Server running");
  res.render("index.ejs", { langs: pLanguages });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", {});
});

app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect("/");
});

// Server listening
app.listen(port, () => {
  console.log(`EJS app listening on port http://localhost:${port}`);
});
