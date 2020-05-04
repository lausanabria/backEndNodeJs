const express = require('express');
const router = express.Router();
const controler = require('./controller');

router.post('/login',controler.login);

module.exports = router;