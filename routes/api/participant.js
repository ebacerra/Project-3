const router = require("express").Router();
const participantController = require("../../controllers/participantController");

// Matches with "/api/participant"
router
  .route("/")
  .get(participantController.findAll)
  .post(participantController.create);

router
  .route("/assignRooms/:gender")
  .post(participantController.assignRooms);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(participantController.findById)
  .put(participantController.update)
  .delete(participantController.remove);

module.exports = router;
