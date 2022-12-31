const express = require('express')
const router = express.Router()
const RoomController = require('../../controllers/AdminControlers/Room.jsx');

router.post('/createRoom',RoomController.RoomCreate);

router.get('/getRoom',RoomController.RoomGet);


module.exports = router