const express = require('express')
const router = express.Router()
const DiselectController = require('../../controllers/AdminControlers/Diselect.jsx');

router.post('/createDiselect',DiselectController.DiselectCreate);

router.delete('/DeleteDiselect',DiselectController.DiselectDelete);


router.get('/GetDiselect',DiselectController.diselectGet);


module.exports = router