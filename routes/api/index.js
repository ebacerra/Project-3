const router = require("express").Router();
const guessRoutes = require("./guess");

// Book routes
router.use("/guess", guessRoutes);

module.exports = router;
