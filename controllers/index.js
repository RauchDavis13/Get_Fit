const router = require('express').Router();
// const loginStart = require('api/user-routes.js')

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const statsRoutes = require('./stats-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/stats', statsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
