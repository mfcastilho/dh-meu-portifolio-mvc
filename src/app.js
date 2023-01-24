const express = require("express");
const path = require("path");


const app = express();
const port = 4040;


const homeRoute = require("./routes/homeRoute");

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.use(express.json());
app.use(express.static(path.resolve("src", "public")));




app.use(homeRoute);


app.listen(port,()=>{
  console.log(`O servidor está rodando na porta: ${port}`);
});