const express = require("express");
const moment = require("moment");
const router = require("./routers/router.js")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const multer = require("multer")
app.use(multer().any())
var cors = require('cors')
app.use(cors())


app.use(
    (req, res, next) => {
        let time = moment().format("DD/MM/YYYY hh:mm:ss a")
        console.log(`time : ${time} , url : ${req.url} `);
        next();
    }
);

// routes
app.use("/", router)



app.use("/*", (req, res) => {
    return res.status(404).send({ status: false, message: `Invalid Path url` })
});


app.listen(process.env.PORT || 5000, function () {
    console.log("Express app running on port " + (process.env.PORT || 5000))
})