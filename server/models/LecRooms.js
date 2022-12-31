const mongoose = require("mongoose");
const LecRooms = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },

  depID: {
    type: Number,
    required: true,
  },
  
  RoomName: {
    type: String,
    required: true,
  },

  Capacity: {
    type: Number,
    required: true,
  },
  Reservations: {
    type: Array,
    default: [],
  },
});


module.exports = mongoose.model("LecRooms", LecRooms);
