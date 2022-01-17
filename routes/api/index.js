const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');
const thoughtRoutes = require('./thoughts');
const userRoutes = require('./users');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
