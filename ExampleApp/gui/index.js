const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, "0.0.0.0", () => {
    console.log("Listening on 0.0.0.0:3000");
});

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});