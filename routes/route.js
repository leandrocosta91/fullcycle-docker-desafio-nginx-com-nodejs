const express = require('express');
const PeopleController = require('../controllers/PeopleController');

const route = express.Router();

route.get('/', PeopleController.index);

module.exports = route;