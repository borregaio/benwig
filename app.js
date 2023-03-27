var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index",  {
        pageName: ""
    });
});

app.get("/about", function (req, res) {
    res.render("about", {
        pageName: "About — "
    });
});

app.get("/contact", function (req, res) {
    res.render("contact",  {
        pageName: "Contact — "
    });
});

app.get("/project1", function (req, res) {
    res.render("project1",  {
        pageName: "Project 1 — "
    });
});













app.listen(3000, function () { console.log("Server is listening on port 3000") });