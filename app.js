const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get("/submit-projects", (req, res)=>{
    res.render("index");
});

app.listen(port, ()=>{
    console.log(`Your website started on http://localhost:${port}`);
});