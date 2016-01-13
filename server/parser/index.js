'use strict';

var express = require('express');
var parserController = require('./parser.controller.js');
var router = express.Router();

router.post('/data', parserController.parse);
module.exports = router;