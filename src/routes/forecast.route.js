const express = require('express');

const asyncHandler = require('express-async-handler');

const forecastRouter = express.Router();

const {getForecast} = require('../controllers/forecast.controller');

forecastRouter.get('/forecast/:insee', asyncHandler(getForecast));

module.exports = forecastRouter;
