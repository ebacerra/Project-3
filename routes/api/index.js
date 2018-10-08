const router = require("express").Router();
const guestRoutes = require("./guest");

// Book routes
router.use("/guest", guestRoutes);

module.exports = router;
