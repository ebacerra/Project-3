const router = require("express").Router();
const participantRoutes = require("./participant");
const roomRoutes = require("./room");
const newsRoutes = require("./news");

// Participant routes
router.use("/participant", participantRoutes);
// Room routes
router.use("/room", roomRoutes);
// News routes
router.use("/news", newsRoutes);

module.exports = router;
