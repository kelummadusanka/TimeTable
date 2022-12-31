const express = require('express')
const router = express.Router()
const LecController = require('../../controllers/AdminControlers/LecCrud.jsx');


router.post('/createLecture',LecController.LecCreate);
router.post('/LoginLecture',LecController.LoginLecture);

router.get('/getlecturer',LecController.LecGet);

router.patch('/lecupdate',LecController.LecUpdate);

router.delete('/lecdelete',LecController.LecDelete);


module.exports = router