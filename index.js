const express = require("express");
const app = express();


// Usar EJS como view engine
app.set("view engine",'ejs');

app.get("/", (req,res) =>{
    res.render("index");
});


app.listen(8080,()=>{
    console.log("App Rodando!");
});