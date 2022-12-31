const Lecture = require("../../models/Lecture");
const mongoose = require("mongoose");
const { json } = require("express/lib/response");

exports.LecCreate = (req, res) => {
  console.log(req.body);
    console.log("Inside Lecturer create");
  
    if (!req.body.department ||!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.regNo || !req.body.gender || !req.body.honorific) {
        return res.status(400).json({ message: "All fields are required" });
    }
  
    Lecture.find({ regNo: req.body.regNo })
      .exec()
      .then((existLec) => {

        if (existLec.length >= 1) {
          return res.status(409).json({
            message: "Lecture ID Already Exist",
          });
        } else {
            console.log("Inside exist lec else");
              const createLec = new Lecture({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                regNo: req.body.regNo,
                phone: req.body.phone,
                email: req.body.email,
                role:"lecture",
                depID:req.body.depID,
                gender:req.body.gender,
                honorific:req.body.honorific,
                image:req.body.image,
                department:req.body.department,
                module: req.body.module,
                likes: req.body.likes,
                unlikes:req.body.unlikes,
                password: 12345,
              });
              createLec
                .save()
                .then((result) => {
                  console.log(result);
                  res.status(201).json({
                    message: "Lecture Create Successfully",
                    lecture: result,
                  });
                })
                .catch((err) => {
                  console.log("Lectre Create Error" + err);
                  res.status(500).json({
                      message:"Lectre_Create_Error: "+ err,
                  });
                });

        }
      });
  };

//   exports.LecGet = (req, res) => {
//     console.log("inside LecGet");
  
//     Lecture.find(function(err, lecturers) {
//       var lecturerMap = {};
  
//       lecturers.forEach(function(lecturer) {
//         lecturerMap[lecturer._id] = lecturer;
//       });
//       console.log(lecturer)
//       res.send(lecturerMap);  
//     });
//   }

exports.LecGet = (req, res) => {
  console.log("inside LecGet");

  Lecture.find()
    .exec()
    .then((lecturer) => {
        return res.status(200).json(lecturer)
        
      
    })
    .catch((err) => {
      console.log("Lec_get_Error: " + err);
      res.status(500).json({
        message:"Lec_get_Error: "+ err,
      });
    });
};



exports.LecUpdate = async (req, res) => {
  console.log("insidse Lec Update");
  Lecture.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.json({
          message: "Lec update failed! ",
        });
      } else {
        console.log("Lecturer upadated !");
        res.json({
          lec: data,
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("Lec Update Error: " + err);
      res.status(500).json({
        user: data,
      });
    });
};

exports.LecDelete = async (req, res) => {
  console.log("insidse Delete!");
  console.log(req.params.id);

  await Lecture.findByIdAndDelete(req.params.id, (error, result) => {
    if (error)
      res.status(400).json({
        message: err,
      });
    else console.log("Lecturer has been deleted!");

    res.status(200).json({
      message: "LecturerLecturer has been deleted!"
    });
  })
    .clone()
    .catch((err) => {
      console.log("Lecturer Delete Error: " + err);
      res.status(500).json({
        message:"LecturerDelete_Error: "+err,
      });
    });
};



exports.LoginLecture = (req, res) => {
  console.log(req.body)
  console.log("inside Lec Login");
Lecture.findOne({ regNo: req.body.regNo })
  .exec()
  .then((user) => {
    if (!user) {
      console.log("Invalid Username");
      return res.status(401).json({
        message: "Invalid Username",
      });
    } else {
      if (req.body.password !== user.password) {
        console.log("Incorrect Password!");
        return res.status(401).json({
          message: "Incorrect Password!",
          success: false,
        });
      } else {
        return res.status(200).json(user);
      }
    }
  })
  .catch((err) => {
    console.log("Login Error: " + err);
    res.status(500).json({
      message: "Login_Error: " + err,
    });
  });
}
