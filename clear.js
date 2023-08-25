const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./Book");

async function clear() {
  try {
    await Book.deleteMany({});
  } catch (err) {
  } finally {
    mongoose.disconnect();
  }
}

clear();
