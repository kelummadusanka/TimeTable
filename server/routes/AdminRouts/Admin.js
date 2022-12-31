const express = require('express')
const router = express.Router()
const AdminController = require('../../controllers/AdminControlers/Admin.jsx');

router.post('/createAdmin',AdminController.AdminCreate);

router.post('/getAdmin',AdminController.AdminGet);


module.exports = router