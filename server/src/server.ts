import express, { Express } from "express";
import { connect } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app: Express = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);

// connect to DB
connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening 🦻 on port ${PORT}!!  `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
