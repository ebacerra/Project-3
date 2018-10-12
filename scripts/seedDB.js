const mongoose = require("mongoose");
const db = require("../models");
convertExcel = require("excel-as-json").processFile;


const fileName = process.argv[2];
console.log(fileName);

convertExcel(fileName, null, null, (err, participantsSeed) => {
  if (err) {
    throw err;
  } else {
    participantsSeed.slice(-1);
    participantsSeed.forEach(participant => {
      participant.gender = participant.gender.toLowerCase();
    });
    console.log(participantsSeed);
    db.Participant.insertMany(participantsSeed)
      .then()
      .catch(err => {
        throw err;
      });
  }
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3");
