const mongoose = require("mongoose");
const Module = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },
  depID: {
    type: Number,
    required: true,
  },
  
  Semester: {
    type: Number,
    required: true,
  },
  ModCredit: {
    type: Number,
    default:0,
  },
  LecHours: {
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
  AssignedLec:{
    type: Array,
    required: true

},

Capacity:{
  type: Number,
  required: true

},

});


module.exports = mongoose.model("Module", Module);
