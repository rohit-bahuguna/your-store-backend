const express = require('express');
const homeRouter = express.Router();
const { home, deshboard } = require('../controllers/homeController');

// homeRouter.route('/').get(home);
homeRouter.route('/').get(deshboard);

module.exports = homeRouter;
