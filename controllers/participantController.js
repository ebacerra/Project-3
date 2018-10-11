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
        let numRooms = n / CAPACITY;
        if (n % CAPACITY > 0) {
          numRooms++;
        }
        let visitors = [];
        let locals = [];
        //separate locals from visitors in two arrays
        dbParticipants.forEach(participant => {
          switch (participant.role) {
            case 'visitor':
              visitors.push(participant);
              break;
            case 'local':
              locals.push(participant);
              break;
          }
        });
        let rooms = [];
        let dbRooms;
        //create rooms in the database
        for (let i = 0; i < numRooms; i++) {
          rooms.push({ roomNumber: i, gender: gender, participants: [] });
        }
        db.Room.create(rooms)
          .then(data => {
            dbRooms = data;
            //distribute participants to rooms
            dbRooms = distributelocals(locals, dbRooms);
            //loop on locals to update room info
            locals.forEach(local => {
              //loop on rooms to find the local person's room
              dbRooms.forEach(dbRoom => {
                if (dbRoom.participants.includes(local)) {
                  local.room = dbRoom;
                }
              });
            });
            dbRooms = distributeVisitors(visitors, dbRooms);
            
          })
          .catch(err => {
            throw err;
          });

      })
      .catch(err => res.status(422).json(err));

  }
};

function distributelocals(locals, rooms) {
  let = shallowCloneArr(rooms);
  let localsClone = shallowCloneArr(locals);
  localsClone.forEach((local) => {
    let i = 0;
    for (i = 0; i < roomsClone.length; i++) {
      rooms[i].participants.push(local);
    }
  });
  return rooms;
}

function distributeVisitors(visitors, rooms) {
  let roomsClone = shallowCloneArr(rooms);
  let visitorsClone = shallowCloneArr(visitors);
  roomsClone.forEach(room => {
    let space = CAPACITY - room.participants.length;
    for (let i = 0; i < space; i++) {
      visitor = visitorsClone.shift();
      room.participants.push(visitor);
    }
  });
  return rooms;
}

function shallowCloneArr(arr) {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element);
  });
  return newArr;
}

function deepCloneArrayRooms(arr) {
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