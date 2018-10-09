const mongoose = require("mongoose");
const db = require("../models");
convertExcel = require("excel-as-json").processFile;
// This file empties the Books collection and inserts the books below
const fileName = process.argv[2];
console.log(fileName);

convertExcel(fileName, null, null, (err, guestSeed) => {
  if (err) {
    throw err;
  } else {
    guestSeed.slice(-1);
    console.log(guestSeed);
    db.Guest.drop();
    db.Guest.insertMany(guestSeed)
      .then()
      .catch(err => {
        throw err;
      });
  }
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3");
