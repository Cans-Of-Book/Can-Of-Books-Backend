"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./Book");

mongoose.connect(process.env.DATABASE_URL);

const seedData = [
  {
    Title: "The Color Purple",
    Author: "Alice Walker",
    Description:
      "Winner of the Pulitzer Prize and the National Book Award, this novel about a resilient and courageous woman has become a Broadway show and a cultural phenomenon.",
    URL: "https://www.google.com/books/edition/The_Color_Purple/1W8-c_m-noEC?hl=en&gbpv=1&dq=the%20color%20purple&pg=PP1&printsec=frontcover",
  },
  {
    Title: "The Silence of the Lambs",
    Author: "Barry Forshaw",
    Description:
      "The Silence of the Lambs is a 1988 psychological horror novel by Thomas Harris. Published August 29, 1988, it is the sequel to Harris's 1981 novel Red Dragon. Both novels feature the cannibalistic serial killer Dr. Hannibal Lecter, this time pitted against FBI Special Agent Clarice Starling.",
    URL: "https://www.google.com/books/edition/The_Silence_of_the_Lambs/zm9vEAAAQBAJ?hl=en&gbpv=1&dq=silence%20of%20the%20lambs&pg=PP1&printsec=frontcover",
  },
  {
    Title: "Maybe You Never Cry Again",
    Author: "Bernie Mac",
    Description:
      "By the tender of age of five, Bernie Mac had found his calling: making others laugh. Now this amazing comedian delves deep inside to share the poignant story of his childhood and the people who shaped him into the strong, self-reliant man and ruthlessly funny comedian he is today.",
    URL: "https://www.google.com/books/edition/Maybe_You_Never_Cry_Again/5ANCSjFRhf8C?hl=en&gbpv=1&pg=PP1&printsec=frontcover",
  },
];

async function seedDatabase() {
  try {
    for (const bookData of seedData) {
      const newBook = new Book(bookData);
      await newBook.save();
    }
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
