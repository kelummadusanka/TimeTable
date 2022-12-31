const Room = require("../../models/LecRooms");
const { json } = require("express/lib/response");

exports.RoomCreate = (req, res) => {
    console.log("Inside Room create");
    console.log(req.body );
    if (!req.body.Department || !req.body.RoomName || !req.body.Capacity) {
        return res.status(400).json({ message: "All fields are required" });
    }
  
    Room.find({ RoomName: req.body.RoomName})
      .exec()
      .then((existRoom) => {
        if (existRoom.length >= 1) {
          return res.status(409).json({
            message: "Room Already Exist",
          });
        } else {
            console.log("Inside exist Room else");
              const createRoom = new Room(req.body);
              createRoom
                .save()
                .then((result) => {
                  console.log(result);
                  res.status(201).json({
                    message: "Room Create Successfully",
                    Module: result,
                  });
                })
                .catch((err) => {
                  console.log("Room Create Error" + err);
                  res.status(500).json({
                      message:"Room: "+ err,
                  });
                });

        }
      });
  };

exports.RoomGet = (req, res) => {
  console.log("inside RoomGet");

  Room.find()
    .exec()
    .then((room) => {
        return res.status(200).json(room)
        
      
    })
    .catch((err) => {
      console.log("Room_get_Error: " + err);
      res.status(500).json({
        message:"Room_get_Error: "+ err,
      });
    });
};
