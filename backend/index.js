import express, { response } from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import 'dotenv/config';
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express()
//middleware para analizar el request body
app.use(express.json())
//middleware para el manejo del cors policy
app.use(cors())

app.use("/books",booksRoute)

mongoose
.connect(process.env.MONGOURI)
.then(()=>{
    console.log("App connected to database")
    app.listen(PORT, ()=>{
        console.log(`app is listening to port: ${PORT}`)
    });
})
.catch((error)=>{
    console.error(error)
})