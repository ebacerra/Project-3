import axios from "axios";

export default {
  // Gets all Participants
  getParticipants: function() {
    return axios.get("/api/participant");
  },
  // Gets the Participant with the given id
  getParticipant: function(id) {
    return axios.get("/api/participant/" + id);
  },
  // Deletes the Participant with the given id
  deleteParticipant: function(id) {
    return axios.delete("/api/participant/" + id);
  },
  // Saves a Participant to the database
  saveParticipant: function(participantData) {
    return axios.post("/api/participant", participantData);
  }
};
