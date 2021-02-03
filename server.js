const express = require("express");
const path = require("path")
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
