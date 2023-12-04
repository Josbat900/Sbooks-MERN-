import express, { response } from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import 'dotenv/config'

const app = express()

app.use(express.json())

//prueba
app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send("welcome to eBook")
});

//save a new book
app.post("/books", async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "send all required fields: tittle, author and publishYear"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)
        
    }catch (error){
        console.error(error.message);
        res.status(500).send({message: error.message});
    }
})

app.get('/books', async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

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