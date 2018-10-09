const router = require("express").Router();
const participantRoutes = require("./participant");

// Book routes
router.use("/participant", participantRoutes);

module.exports = router;
