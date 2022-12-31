const mongoose = require("mongoose");
const Diselect = new mongoose.Schema({
  diselect: {
    type: Array,
    required: true,
  },
});


module.exports = mongoose.model("Diselect", Diselect);
