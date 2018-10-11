const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Participant.find(req.query)
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
        let numRooms = n / 4;
        if (n % 4 > 0) {
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
        for (let i = 0; i < numRooms; i++) {
          rooms.push({ participants: [] });
        }
        distributelocals(locals, rooms);
        distributeVisitors(visitors, rooms);
        // //distribute locals
        // dbParticipants.forEach(participant => {
        //     for(let i=0; i<rooms.length;i++){
        //       if (rooms[i].participants<4){
        //         rooms[i].participants.push(participant);
        //       }
        //     }

      })
      .catch(err => res.status(422).json(err));

  }
};

function distributelocals(locals, rooms) {
  locals.forEach((local) => {
    let i = 0;
    for (i = 0; i < newRooms; i++) {
      rooms[i].participants.push(local);
    }
  });
}

function distributeVisitors(visitors, rooms) {
  //to be implemented
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