import express from "express";
import handlebars from "express-handlebars";

const app = express();

//Set up handlebars
const hbs = handlebars.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("layouts", process.cwd() + "/views/layouts");

app.get("*", (req, res) => {
  res.render("wrapper");
});

app.listen(3000, () =>
  console.log("App is listening on http://localhost:3000")
);
