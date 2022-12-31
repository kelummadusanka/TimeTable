const Diselect = require("../../models/Diselect");
exports.DiselectCreate = async(req, res) => {

    console.log("Inside Diselect create");
console.log(req.body)
  
    await Diselect.insertMany(req.body)
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Diselect Create Successfully",
          Diselect: result,
        });
      })
      .catch((err) => {
        console.log("Diselect Create Error" + err);
        res.status(500).json({
          message: "Diselect_Create_Error: " + err,
        });
      });
  };


  exports.diselectGet = (req, res) => {
    console.log("inside diselectGet");
  
    Diselect.find()
      .exec()
      .then((diselect) => {
        console.log(diselect)
        return res.status(200).json(diselect[0]);
      })
      .catch((err) => {
        console.log("diselect_get_Error: " + err);
        res.status(500).json({
          message: "diselect_get_Error: " + err,
        });
      });
  };
  


  exports.DiselectDelete = async (req, res) => {
    console.log("insde Diselect deleter")
    Diselect.deleteMany({},res=>function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Deleted all existing Diselect in the collection');
      }
    }).clone()
  };
  