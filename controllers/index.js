const router = require('express').Router();

const apiRoutes = require("./api");
const homeRoutes = require('./homeRoutes');
const noteRoutes = require("./note-routes");

router.use("/api", apiRoutes);
router.use('/note',noteRoutes);
router.use('/', homeRoutes);

module.exports = router;
