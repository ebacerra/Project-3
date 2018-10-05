const mongoose = require("mongoose");
const db = require("../models");
convertExcel = require('excel-as-json').processFile;
// This file empties the Books collection and inserts the books below
const fileName = process.argv[2];
console.log(fileName);

convertExcel(fileName, null, null, (err, guestSeed) => {

  if (err) {
    throw err;
  } else {
    guestSeed.forEach(guest => {
      db.Guest.create(guest)
        .then(dbGuest => {

        })
        .catch(err => {
          throw err;
        });
    });
    db.Guest.remove({})
      .then(() => db.Guest.collection.insertMany(guestSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  }
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3");



// const guestSeed = [
//   {
//     lastName: "Abern",
//     firstName: "Andrew",
//     gender: "Male",
//     phone: "847-436-9123",
//     role: "participant",
//     birthday: "5/15/1994"
//   },
//   {
//     lastName: "Babajoni",
//     firstName: "Kevin",
//     gender: "Male",
//     phone: "847-338-0445",
//     role: "participant",
//     birthday: "9/26/1995"
//   },
//   {
//     lastName: "Berg Einhorn",
//     firstName: "Benjamin",
//     gender: "Male",
//     phone: "847-436-9123",
//     role: "participant",
//     birthday: "6/2/1995"
//   },
//   {
//     lastName: "Block",
//     firstName: "Molly",
//     gender: "Female",
//     phone: "773-320-0471",
//     role: "participant",
//     birthday: "7/4/1993"
//   },
//   {
//     lastName: "Berkowitz",
//     firstName: "Kayla",
//     gender: "Female",
//     phone: "732-403-7118",
//     role: "participant",
//     birthday: "3/16/1995"
//   }
// ];


