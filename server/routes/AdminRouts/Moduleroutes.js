const express = require('express')
const router = express.Router()
const ModController = require('../../controllers/AdminControlers/Module.jsx');

router.post('/createModule',ModController.ModCreate);

router.get('/getModule',ModController.ModGet);


module.exports = router