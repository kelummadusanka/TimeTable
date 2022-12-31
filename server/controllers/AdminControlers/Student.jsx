const mongoose = require("mongoose");
const { json } = require("express/lib/response");
const Student = require("../../models/Student");

// exports.AdminCreate = (req, res) => {
//   console.log(req.body);
//   console.log("Inside Admin create");

//   if (!req.body.firstname || !req.body.lastname || !req.body.regNo) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   Admin.find({ regNo: req.body.regNo })
//     .exec()
//     .then((existLec) => {
//       if (existLec.length >= 1) {
//         return res.status(409).json({
//           message: "Admin ID Already Exist",
//         });
//       } else {
//         console.log("Inside exist admin else");
//         const newAdmin = new Admin({
//           firstname: req.body.firstname,
//           lastname: req.body.lastname,
//           regNo: req.body.regNo,
//           role: "admin",
//           password: 12345,
//         });
//         newAdmin
//           .save()
//           .then((result) => {
//             console.log(result);
//             res.status(201).json({
//               message: "Admin Create Successfully",
//               lecture: result,
//             });
//           })
//           .catch((err) => {
//             console.log("Admin Create Error" + err);
//             res.status(500).json({
//               message: "Admin_Create_Error: " + err,
//             });
//           });
//       }
//     });
// };

// exports.AdminGet = (req, res) => {
//   console.log("inside AdminGet");

//   Admin.findOne({ regNo: req.body.regNo })
//     .exec()
//     .then((ad) => {
//       return res.status(200).json(ad);
//     })
//     .catch((err) => {
//       console.log("Admin_get_Error: " + err);
//       res.status(500).json({
//         message: "Admin_get_Error: " + err,
//       });
//     });
// };

exports.StudentLogin = (req, res) => {
  console.log(req.body)
  console.log("inside StudentGet");
  Student.findOne({ Reg_No: req.body.regNo })
  .exec()
  .then((user) => {
    if (!user) {
      console.log("Invalid Reg_No");
      return res.status(401).json({
        message: "Invalid Reg_No",
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
