import axios from "axios";

export default {
  // Gets all books
  getParticipants: function() {
    return axios.get("/api/participant");
  },
  // Gets the book with the given id
  getParticipant: function(id) {
    return axios.get("/api/participant/" + id);
  },
  // Deletes the book with the given id
  deleteParticipant: function(id) {
    return axios.delete("/api/participant/" + id);
  },
  // Saves a book to the database
  saveParticipant: function(ParticipantData) {
    return axios.post("/api/participant", ParticipantData);
  }
};
