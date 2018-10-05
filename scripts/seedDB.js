const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3");

const guessSeed = [
  {
    lastName: "Abern",
    firstName: "Andrew",
    gender: "Male",
    phone: "847-436-9123",
    role: "participant",
    birthday: "5/15/1994"
  },
  {
    lastName: "Babajoni",
    firstName: "Kevin",
    gender: "Male",
    phone: "847-338-0445",
    role: "participant",
    birthday: "9/26/1995"
  },
  {
    lastName: "Berg Einhorn",
    firstName: "Benjamin",
    gender: "Male",
    phone: "847-436-9123",
    role: "participant",
    birthday: "6/2/1995"
  },
  {
    lastName: "Block",
    firstName: "Molly",
    gender: "Female",
    phone: "773-320-0471",
    role: "participant",
    birthday: "7/4/1993"
  },
  {
    lastName: "Berkowitz",
    firstName: "Kayla",
    gender: "Female",
    phone: "732-403-7118",
    role: "participant",
    birthday: "3/16/1995"
  }
];

db.Guess.remove({})
  .then(() => db.Guess.collection.insertMany(guessSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
