const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", Schema);

module.exports = Book;
