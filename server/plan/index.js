'use strict';

var express = require('express');
var planController = require('./plan.controller.js');
var router = express.Router();

router.get('/get/:id', planController.get);
module.exports = router;