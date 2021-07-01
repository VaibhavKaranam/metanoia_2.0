const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

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