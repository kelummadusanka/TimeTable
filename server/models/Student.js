const mongoose = require('mongoose')
const Student = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Semester: {
        type: String,
        required: true
    },

    No_of_Modules: {
        type: String,
        required: true
    },

    Reg_No: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default:""
    },
    role: {
        type: String,
        default:"Student"
    },

    department:{
        type: String,
        required: true

    },
    depID: {
        type: Number,
        required: true,
      },

    password: {
        default:12345,
        type: String,
        required: true
    },

    Date: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model('Student', Student)