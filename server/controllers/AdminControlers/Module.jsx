const Module = require("../../models/Module");
const { json } = require("express/lib/response");

exports.ModCreate = (req, res) => {
    console.log("Inside Module create");
    console.log(req.body.Modcode );
    if (!req.body.Department || !req.body.Semester || !req.body.ModCredit || !req.body.LecHours || !req.body.ModName || !req.body.Modcode || !req.body.AssignedLec) {
        return res.status(400).json({ message: "All fields are required" });
    }
  
    Module.find({ Modcode: req.body.Modcode })
      .exec()
      .then((existMod) => {
        if (existMod.length >= 1) {
          return res.status(409).json({
            message: "Module Already Exist",
          });
        } else {
            console.log("Inside exist Module else");
              const createMod = new Module({
                Department: req.body.Department,
                Semester: req.body.Semester,
                ModCredit: req.body.ModCredit,
                LecHours: req.body.LecHours,
                ModName: req.body.ModName,
                depID: req.body.depID,
                Modcode:req.body.Modcode,
                AssignedLec:req.body.AssignedLec,
              });
              createMod
                .save()
                .then((result) => {
                  console.log(result);
                  res.status(201).json({
                    message: "Module Create Successfully",
                    Module: result,
                  });
                })
                .catch((err) => {
                  console.log("Module Create Error" + err);
                  res.status(500).json({
                      message:"Module_Create_Error: "+ err,
                  });
                });

        }
      });
  };

exports.ModGet = (req, res) => {
  console.log("inside ModGet");

  Module.find()
    .exec()
    .then((module) => {
        return res.status(200).json(module)
        
      
    })
    .catch((err) => {
      console.log("Mod_get_Error: " + err);
      res.status(500).json({
        message:"Mod_get_Error: "+ err,
      });
    });
};
