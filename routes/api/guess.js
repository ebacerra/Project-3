const router = require("express").Router();
const guessController = require("../../controllers/guessController");

// Matches with "/api/books"
router
  .route("/")
  .get(guessController.findAll)
  .post(guessController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(guessController.findById)
  .put(guessController.update)
  .delete(guessController.remove);

module.exports = router;
