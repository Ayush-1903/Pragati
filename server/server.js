import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();


// middleware
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());


app.use('/user', userRoutes)


// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
         app.listen(PORT, () => {
            console.log( `listening 🦻 on port ${PORT}!!  ` );
         })
    })
    .catch((err)=>{
        console.log(err);
    })