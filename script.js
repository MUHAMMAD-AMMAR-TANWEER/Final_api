const mongoose = require("mongoose");
const express = require("express");
const routes = require("./models/routes")
const cors = require("cors");


mongoose
    .connect("mongodb://localhost/Dandb", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use("/api", routes);



        app.listen(5000, () => {
            console.log("server Started")
        })



    })
    .catch(err => console.error("Connection error", err));

