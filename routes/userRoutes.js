const express = require('express');
const router = express.Router();

const userCtrl = require('./../controllers/userCtrl');
router.post('/login' , userCtrl.login);
router.post('/signup' , userCtrl.signup);
router.get('/', userCtrl.getUser);

module.exports = router;