const router = require("express").Router();
const participantController = require("../../controllers/participantController");

// Matches with "/api/books"
router
  .route("/")
  .get(participantController.findAll)
  .post(participantController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(participantController.findById)
  .put(participantController.update)
  .delete(participantController.remove);

module.exports = router;
