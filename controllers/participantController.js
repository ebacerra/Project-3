const db = require("../models");
const CAPACITY = 4;
module.exports = {
  findAll: function (req, res) {
    db.Participant.find()
      .sort({ lastName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Participant.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Participant.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Participant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Participant.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  assignRooms: function (req, res) {
    let gender = req.params.gender;
    db.Participant.find({ gender: gender })
      .then(dbParticipants => {
        let n = dbParticipants.length;
        let numRooms = Math.floor(n / CAPACITY);
        if (n % CAPACITY > 0) {
          numRooms++;
        }
        let visitors = [];
        let locals = [];
        console.log(`Gender: ${gender}, visitors: ${visitors.length}, locals: ${locals.length}`);
        //separate locals from visitors in two arrays
        dbParticipants.forEach(participant => {
          switch (participant.role) {
            case 'visitor':
            case 'admin':
              visitors.push(participant);
              break;
            case 'local':
              locals.push(participant);
              break;
            default:
              break;
          }
        });
        console.log(`Rooms: ${numRooms} visitors: ${visitors.length} locals: ${locals.length}`);
        let rooms = [];
        let dbRooms;
        //create rooms in the database
        for (let i = 0; i < numRooms; i++) {
          rooms.push({ roomNumber: i, gender: gender, participants: [] });
        }
        db.Room.deleteMany({})
          .then(data => {
            db.Room.create(rooms)
              .then(data => {
                dbRooms = data;
                //distribute participants to rooms
                distributelocals(locals, dbRooms);
                distributeVisitors(visitors, dbRooms);
                outputRooms(dbRooms);
                console.log("rooms distributed.");
                updateRoomsDB(dbRooms, 0);
                updateParticipantsDB(dbParticipants, 0);

              })
              .catch(err => {
                throw err;
              });
          })
          .catch(err => {
            throw err;
          });


      })
      .catch(err => res.status(422).json(err));

  }
};

function distributelocals(locals, rooms) {
  console.log(`Inside distribute locals Locals: ${locals} rooms: ${rooms.length}`);
  locals.forEach(local => {
    let i = 0;
    for (i = 0; i < rooms.length; i++) {
      if (rooms[i].participants.length === 0) {
        rooms[i].participants.push(local);
        local.room = rooms[i];
        break;
      }
    }
  });
}

function distributeVisitors(visitors, rooms) {
  //let roomsClone = deepCloneArrayRooms(rooms);
  let visitorsClone = shallowCloneArr(visitors);
  rooms.forEach(room => {
    let space = CAPACITY - room.participants.length;
    for (let i = 0; i < space; i++) {
      visitor = visitorsClone.shift();
      if (visitor) {
        room.participants.push(visitor);
        visitor.room = room;
      }
    }
  });
}

function shallowCloneArr(arr) {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element);
  });
  return newArr;
}

function deepCloneArrayRooms(arr) {
  console.log(`inside deepCloneArrayRooms`);
  let newArr = [];
  arr.forEach(room => {
    let newRoom = {
      number: room.number,
      gender: room.gender,
      participants: []
    }
    room.participants.forEach(participant => {
      newRoom.participants.push(participant);
    });
    newArr.push(newRoom);
  });
  return newArr;
}
function outputRooms(rooms) {
  rooms.forEach(room => {
    console.log(`Room: ${room.roomNumber} ${room.gender} participants: ${room.participants.length}`);
    room.participants.forEach(participant => {
      outputParticipant(participant);
    });
  });
}
function outputParticipant(p) {
  if (p) {
    console.log(`Name: ${p.firstName} ${p.lastName} role: ${p.role}`);
  }

}

function updateRoomsDB(rooms, curIndex) {
  console.log(`updating Room #${curIndex}: ${rooms[curIndex]._id}`);
  db.Room.updateOne({ _id: rooms[curIndex]._id }, rooms[curIndex], { multi: false })
    .then(dbRoom => {
      console.log(`Updated Room: ${dbRoom}`);
      curIndex++;
      if (curIndex === rooms.length) {
        return rooms;
      } else {
        updateRoomsDB(rooms, curIndex);
      }
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}
function updateParticipantsDB(participants, curIndex) {
  console.log(`updating Participant #${curIndex}: ${participants[curIndex]._id}`);
  db.Participant.updateOne({ _id: participants[curIndex]._id }, participants[curIndex], { multi: false })
    .then(dbParticipant => {
      console.log(`Updated Participant: ${dbParticipant}`);
      curIndex++;
      if (curIndex === participants.length) {
        return participants;
      } else {
        updateParticipantsDB(participants, curIndex);
      }
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}