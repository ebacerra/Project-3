const router = require("express").Router();
const guestController = require("../../controllers/guestController");

// Matches with "/api/books"
router
  .route("/")
  .get(guestController.findAll)
  .post(guestController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(guestController.findById)
  .put(guestController.update)
  .delete(guestController.remove);

module.exports = router;
