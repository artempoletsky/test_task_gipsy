
import express from "express";
import { dependencies } from "./package.json";

const app = express();
const port = 3001;

app.set("view engine", "ejs");
// app.set('views', './views')

app.get('/', (req, res) => {
  res.render("why_we_dont_need_express_here", {
    title: "Hello world",
    expressVersion: dependencies.express,
  });
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
