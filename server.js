require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/posts", require("./src/route/post"))
app.use("/api/users", require("./src/route/user"))

// Connecting to the Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT} and connected to MongoDB`)
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error.message)
    })