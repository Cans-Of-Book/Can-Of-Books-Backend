"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookHandler = require("./booksHandler");
const app = express();
const PORT = process.env.PORT || 3001;
console.log("PORT", PORT);
const mongoDB = process.env.DATABASE_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("MongoDb Connected");
}

const Book = require("./Book");

app.get("/test", (request, response) => {
  response.send("Hello World");
});

app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    response.json(books);
  } catch (error) {
    response.status(500).json({ error: "Error to Server" });
  }
});
app.post("/books", async (request, response) => {
  try {
    console.log("hello");
    const newBookData = request.body;
    console.log("hello2");
    const newBook = new Book(newBookData);
    console.log(newBookData);
    await newBook.save();
    response.status(201).json(newBook);
    console.log(newBookData);
  } catch (err) {
    console.log(err.message);
    response.status(500).json({ err: "Server Error" });
  }
});

app.delete("/books/:id", async (request, response) => {
  try {
    const bookId = request.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      response.status(404).json({ error: "Book not found" });
      return;
    }

    response.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    response.status(500).json({ error: "Server Error" });
  }
});

app.put("/books/:id", async (request, response) => {
  try {
    const bookId = request.params.id;
    const updatedBookData = request.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedBookData, {
      new: true, // Return the updated document
    });

    if (!updatedBook) {
      response.status(404).json({ error: "Book not found" });
      return;
    }

    response.json(updatedBook);
  } catch (err) {
    response.status(500).json({ error: "Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
