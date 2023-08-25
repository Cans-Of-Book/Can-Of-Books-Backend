const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Author: {
    type: String,
  },
  Description: {
    type: String,
  },
  URL: {
    type: String,
  },
});

const Book = mongoose.model("Book", Schema);

module.exports = Book;
