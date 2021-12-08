const express = require ("express")
const app = express()
const path = require("path")


app.listen(process.env.PORT || 3000,function() { console.log ("Servidor corriendo en el puerto 3000")})

app.get("/",(req,res)=> {res.sendFile(path.resolve(__dirname,"../views/index.html"))})

app.use(express.static(path.resolve(__dirname,"../public")));

app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname,"../views/register.html")));

app.get("/ingresar", (req,res) => res.sendFile(path.resolve(__dirname,"../views/login.html")));