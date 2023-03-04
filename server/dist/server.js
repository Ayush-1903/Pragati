import express from "express";
import { connect } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
var app = express();
var PORT = process.env.PORT || 4000;
dotenv.config();
// middleware
// app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use("/user", userRoutes);
// connect to DB
connect(process.env.MONGO_URI)
    .then(function () {
    app.listen(PORT, function () {
        console.log("listening \uD83E\uDDBB on port ".concat(PORT, "!!  "));
    });
})
    .catch(function (err) {
    console.log(err);
});
