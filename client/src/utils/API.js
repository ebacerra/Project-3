import axios from "axios";

export default {
  getGuests: function() {
    return axios.get("/api/guest");
  },
  // Gets the guest with the given id
  getGuest: function(id) {
    return axios.get("/api/guest/" + id);
  },
  // Deletes the guest with the given id
  deleteGuest: function(id) {
    return axios.delete("/api/guest/" + id);
  },
  // Saves a guest to the database
  saveGuest: function(guestData) {
    return axios.post("/api/guest", guestData);
  }
};
