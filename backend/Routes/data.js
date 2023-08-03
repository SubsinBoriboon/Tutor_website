const express = require('express');
const router = express.Router();
const { create } = require('../Controller/AccountController');

router.post('/create', create);

module.exports = router;
