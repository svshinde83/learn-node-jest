const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json('HTTP GET First Root url response');
});

app.listen(3000, () => {
    console.log('server is now running');
});