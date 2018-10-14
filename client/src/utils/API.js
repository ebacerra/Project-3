import axios from "axios";

export default {
  // Create a participannt
  createParticipant: participantData => {
    return axios.post("/api/participant", participantData);
  },
  // Gets all participants
  getParticipants: function() {
    return axios.get("/api/participant");
  },
  // Gets the participant with the given id
  getParticipant: function(id) {
    return axios.get("/api/participant/" + id);
  },
  // Deletes the participant with the given id
  deleteParticipant: function(id) {
    return axios.delete("/api/participant/" + id);
  },
  // Saves a participant to the database
  updateParticipant: function(id, participantData) {
    return axios.put(`/api/participant/${id}`, participantData);
  },
  assignRooms: () => {
    return axios.post("/api/participant/assignRooms");
  },
  // Room functions:
  getRooms: function() {
    return axios.get("/api/room");
  }
};
