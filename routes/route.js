const express = require('express');
const PeopleController = require('../controllers/PeopleController');

const route = express.Router();

route.get('/', (req, res) => {
    res.send("About this wiki");
  });

module.exports = route;