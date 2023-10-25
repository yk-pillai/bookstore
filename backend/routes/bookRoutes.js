import express from 'express'
import { Book } from '../models/bookModels.js';

const router = express.Router()

//get all the books
router.get("/", async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).send({
      count: book.length,
      data: book,
    });
    // res.json({ result: "Success"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//get a book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).send(book);
    // res.json({ result: "Success"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//update a book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).send({ message: "Could not find the book" });
    }
    res.status(200).send({ message: "Book is updated." });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//delete a book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).send({ message: "Could not find the book" });
    }
    res.status(200).send({ message: "Book is deleted." });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author and publishedYear.",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };
    const book = await Book.create(newBook);
    // return res.status(201).send(req.body);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
