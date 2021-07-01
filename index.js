const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("client/public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("/api/contact", (req, res) => {
    console.log(req);
    res.json({message: "Hello browser"});
});

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.json({message: "Hello front-end"});
});

app.listen(PORT, () => {
    console.log('Server listening on ' + String(PORT));
});