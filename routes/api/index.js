const router = require("express").Router();
const guestRoutes = require("./guest");

// Book routes
router.use("/guess", guestRoutes);

module.exports = router;
