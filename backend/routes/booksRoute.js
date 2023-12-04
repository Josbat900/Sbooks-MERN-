import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router(); 

//save a new book
router.post("/", async(req,res)=>{
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

//llamar todos los libros
router.get('/', async (request, response) => {
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

//llamar un libro mediante el id
router.get('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const book = await Book.findById(id);
        
        return response.status(200).json(book);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//actualizar un libro
router.put("/:id", async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
            message: "send all required fields: tittle, author and publishYear"})
        }

            const id = req.params.id
            const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({message : "Book not found"})
        }
        
        return res.status(200).send({message : "Book update successfully"})

    }catch(error){
        console.error(error.message)
        res.status(500).send({mensage: error.mensage})
    }
})

//delate a book by id
router.delete("/:id", async(req,res)=>{
    try{
            const id = req.params.id
            const result = await Book.findByIdAndDelete(id);
        
        if(!result){
            return res.status(404).json({message : "Book not found"})
        }
        
        return res.status(200).send({message : "Book delete successfully"})

    }catch(error){
        console.error(error.message)
        res.status(500).send({mensage: error.mensage})
    }
})

export default router