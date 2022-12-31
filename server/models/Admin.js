const mongoose = require("mongoose");
const Admin = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },



  regNo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "Admin",
  },



  password: {
    type: String,
    required: true,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Admin", Admin);
