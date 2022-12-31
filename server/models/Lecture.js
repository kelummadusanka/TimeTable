const mongoose = require('mongoose')
const Lecture = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    regNo: {
        type: String,
        required: true
    },

    honorific: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default:""
    },
    role: {
        type: String,
        default:"Lecture"
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    department:{
        type: String,
        required: true

    },
    depID: {
        type: Number,
        required: true,
      },
    module:{
        type: Array,
        required: true

    },
    password: {
        type: String,
        required: true
    },

    likes:{
        type:Array
    },
    unlikes:{
        type:Array
    },

    Date: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model('Lecture', Lecture)