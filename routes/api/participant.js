const router = require("express").Router();
const participantController = require("../../controllers/participantController");

// Matches with "/api/participants"
router
  .route("/")
  .get(participantController.findAll)
  .post(participantController.create);

router
  .route("/assignRooms")
  .post(participantController.assignRooms);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(participantController.findById)
  .put(participantController.update)
  .delete(participantController.remove);

module.exports = router;
