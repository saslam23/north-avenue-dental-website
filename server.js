require('dotenv').config();
const express = require("express");
const sendMail = require("./mail");
const cors = require("cors");
const path = require("path");

const app = require("https-localhost");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 8080;

app.post("/email", (req, res) => {

    const email = req.body.email;
    const subject = req.body.subject;
    const text = req.body.message;

    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json("Internal Error")
        } else {
            res.json("Email has been sent!")
        }
    })

});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("dental-frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "dental-frontend", "build", "index.html"))
    })
}


app.listen(PORT, () => {
    console.log(`Successfully running server on port ${PORT}`)
});