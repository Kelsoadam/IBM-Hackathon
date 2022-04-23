const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("x-powered-by", false);
app.set("trust proxy", true);

app.listen(3000, "0.0.0.0", () => {
    console.log("Listening on 0.0.0.0:3000");
});

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/temp", (req, res) => {
    res.sendFile(`${__dirname}/temp.html`);
});

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found");
});