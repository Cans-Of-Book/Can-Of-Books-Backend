"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookHandler = require("./booksHandler");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoDB = process.env.DATABASE_URL;

app.use(cors());

// add the start up here
<<<<<<< HEAD
// This code block came from mongoose documentation 
mongoose.set("strictQuery", false);

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   console.log("MongoDb Connected")
// }
=======
// This codeblock came from mongoose documentation
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("MongoDb Connected");
}
>>>>>>> main

const Book = require("./Book");

app.get("/test", (request, response) => {
  response.send("Hello World");
});

<<<<<<< HEAD
app.get("/books", bookHandler)
=======
app.get("/books", async (request, response) => {
  try {
    const books = await Book.find();
    response.json(books);
  } catch (error) {
    response.status(500).json({ error: "Error to Server" });
  }
});
>>>>>>> main

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
}); //check code!

// added my checkout!

// schema/model
// controllers
//routes
