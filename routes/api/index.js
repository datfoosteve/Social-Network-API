const router = require("express").Router();
const thoughtRoutes = require("./thoughts");
const userRoutes = require("./users");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;
