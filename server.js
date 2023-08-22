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
app.use(bodyParser.json()); // returns middleware that only parses JSON

// add the start up here
// This codeblock came from mongoose documentation
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
    const newBookData = request.body;
    const newBook = new Book(newBookData);
    await newBook.save();

    response.status(201).json(newBook);
  } catch (err) {
    response.status(500).json({ err: "Server Error" });
  }
});



app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
