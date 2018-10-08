import axios from "axios";

export default {
  // Gets all books
<<<<<<< HEAD
  getGuests: function() {
=======
  getGuest: function() {
>>>>>>> e3a35b401faf1ec605b98568c8cda38786fb06b9
    return axios.get("/api/guest");
  },
  // Gets the book with the given id
  getGuest: function(id) {
    return axios.get("/api/guest/" + id);
  },
  // Deletes the book with the given id
  deleteGuest: function(id) {
    return axios.delete("/api/guest/" + id);
  },
  // Saves a book to the database
  saveGuest: function(bookData) {
    return axios.post("/api/guest", guestData);
  }
};
