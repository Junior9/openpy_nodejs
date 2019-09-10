const express = require("express");
const router = express.Router();
const pagoController = require('../controller/pago-controller');
const bodyParser = require('body-parser');

router.post('/tarjeta',bodyParser.json(),pagoController.tarjeta);

 
module.exports = router;