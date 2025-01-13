const express = require('express');
const { getDashboard, getMembers } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/dashboard', getDashboard);
router.get('/members', getMembers);

module.exports = router;
