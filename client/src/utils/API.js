import axios from "axios";

export default {
  // Gets all books
  getParticipants: function() {
    return axios.get("/api/participant");
  },
  // Gets the book with the given id
  getParticipant: function(id) {
    return axios.get("/api/participants/" + id);
  },
  // Deletes the book with the given id
  deleteParticipant: function(id) {
    return axios.delete("/api/participants/" + id);
  },
  // Saves a book to the database
  saveParticipant: function(participantData) {
    return axios.post("/api/participants", participantData);
  },

  // Room functions:
  getRooms: function() {
    return axios.get("/api/room");
  }
};
