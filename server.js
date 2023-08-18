"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoDB = process.env.MONGOCONNECTION;

app.use(cors());

// add the start up here
// This codeblock came from mongoose documentation 
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("MongoDb Connected")
}

app.get("/test", (request, response) => {
  response.send("Hello World");
});

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
}); //check code!

// added my checkout!

// schema/model
// controllers
//routes