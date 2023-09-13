"use strict";
const router = require('express').Router();
const homeController = require('../controllers/Home.controller');
router.use("/", homeController);
module.exports = router;
