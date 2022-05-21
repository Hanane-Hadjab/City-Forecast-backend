const express = require('express');

const asyncHandler = require('express-async-handler');

const cityRouter = express.Router();

const {getCities} = require('../controllers/city.controller');

cityRouter.get('/cities', asyncHandler(getCities));

module.exports = cityRouter;
