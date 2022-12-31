const express = require('express')
const router = express.Router()
const TimeCellController = require('../../controllers/AdminControlers/TimeCell.jsx');


router.post('/createTimeCell',TimeCellController.TimeCellCreate);

router.get('/getTimeCell',TimeCellController.TimeCellGet);

router.patch('/TimeCellupdate',TimeCellController.TimeCellUpdate);

router.delete('/TimeCelldelete',TimeCellController.TimeDelete);


module.exports = router

