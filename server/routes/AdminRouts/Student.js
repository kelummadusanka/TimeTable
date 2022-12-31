const express = require('express')
const router = express.Router()
const StudentController = require('../../controllers/AdminControlers/Student.jsx');

router.post('/',StudentController.StudentLogin);


module.exports = router