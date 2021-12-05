const express = require ("express")
const app = express()
const path = require("path")


app.listen(3000,() =>console.log("servidor conectado"));

app.get("/",(req,res)=> {res.sendFile(path.resolve(__dirname,"./views/index.html"))})

app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")));

app.get("/ingresar", (req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")));