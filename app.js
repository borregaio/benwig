var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index",  {
        pageName: ""
    });
});

// app.get("/about", function (req, res) {
//     res.render("about", {
//         pageName: "About — "
//     });
// });

app.get("/contact", function (req, res) {
    res.render("contact",  {
        pageName: "Contact — "
    });
});

app.get("/project1", function (req, res) {
    res.render("project",  {
        pageName: "Dispersal Wear — ",
        image: "a"
    });
});

app.get("/project3", function (req, res) {
    res.render("project",  {
        pageName: "Concrete + Knit + Skin — ",
        image: "b"
    });
});

app.get("/project2", function (req, res) {
    res.render("project",  {
        pageName: "Concrete + Knit — ",
        image: "c"
    });
});

app.get("/project4", function (req, res) {
    res.render("project",  {
        pageName: "Set Design — ",
        image: "d"
    });
});

app.get("/project5", function (req, res) {
    res.render("project",  {
        pageName: "Beach Towels — ",
        image: "e"
    });
});

app.get("/project7", function (req, res) {
    res.render("project",  {
        pageName: "Artefacts of a Memory — ",
        image: "f"
    });
});

app.get("/project6", function (req, res) {
    res.render("project",  {
        pageName: "Tyre — ",
        image: "g"
    });
});













app.listen(3000, function () { console.log("Server is listening on port 3000") });