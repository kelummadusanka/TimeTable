const mongoose = require("mongoose");
const TimeCell = new mongoose.Schema({
  id:{
    type: Number,
    required: true,
  },
  depID: {
    type: Number,
    // required: true,
  },
  
  Semester: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },

  time: {
    type: Number,
    required: true,
  },

  Lecturer: {
    type: String,
    required: true,
  },

  ModName: {
    type: String,
    required: true,
  },

  Modcode: {
    type: String,
    required: true,
  },

  Roomcode: {
    type: String,
    required: true,
  },

});


module.exports = mongoose.model("TimeCell", TimeCell);
