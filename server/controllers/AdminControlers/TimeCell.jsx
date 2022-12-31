const TimeCell = require("../../models/TimeCell");

const { json } = require("express/lib/response");
const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TimeSl = [
  "08300930",
  "09301030",
  "10301130",
  "11301230",
  "12301330",
  "13301430",
  "14301530",
  "15301630",
];
const Roomarry=["LT2","LT1","ELR","ECC","NWLR1","NWLR2","LR1","LR2"]

exports.TimeCellCreate = async(req, res) => {
  console.log("Inside TimeCell create");
  let Arra =[]
  req.body.forEach((element) => {
    const roomIndex = Math.floor(Math.random() * (Roomarry.length - 1));
    const roo = Roomarry[roomIndex];
    const dayindex = Math.floor((element.timeSlots / 10) % 10) - 1;
    const day = WeekDays[dayindex];
    const timeindex = Math.floor(element.timeSlots % 10) - 1;
    const time = TimeSl[timeindex];
    const objec = {
      Lecturer: element.teacher,
      ModName: element.Module.substr(element.Module.indexOf(" ") + 1),
      Modcode: element.Module.split(" ")[0],
      Roomcode: roo,
      Semester: Math.floor((element.timeSlots / 100) % 10),
      day: day,
      time: time,
      id: element.timeSlots,
    };

    Arra= [...Arra,objec]
    
    console.log(Arra);
  });

  console.log("Inside insert TimeCell");

  await TimeCell.insertMany(Arra)
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Time Cell Create Successfully",
        TimeCell: result,
      });
    })
    .catch((err) => {
      console.log("Time Cell Create Error" + err);
      res.status(500).json({
        message: "Time_Cell_Create_Error: " + err,
      });
    });
};

exports.TimeCellGet = (req, res) => {
  console.log("inside TimeCellGet");

  TimeCell.find()
    .exec()
    .then((timeCell) => {
      return res.status(200).json(timeCell);
    })
    .catch((err) => {
      console.log("TimeCell_get_Error: " + err);
      res.status(500).json({
        message: "TimeCell_get_Error: " + err,
      });
    });
};

exports.TimeCellUpdate = async (req, res) => {
  console.log("insidse TimeCell Update");
  TimeCell.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.json({
          message: "TimeCell update failed! ",
        });
      } else {
        console.log("TimeCell upadated !");
        res.json({
          TimeCell: data,
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("TimeCell Update Error: " + err);
      res.status(500).json({
        error: err,
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
      message: "LecturerLecturer has been deleted!",
    });
  })
    .clone()
    .catch((err) => {
      console.log("Lecturer Delete Error: " + err);
      res.status(500).json({
        message: "LecturerDelete_Error: " + err,
      });
    });
};


exports.TimeDelete = async (req, res) => {
  console.log("insde timecell deleter")
  TimeCell.deleteMany({},res=>function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Deleted all existing documents in the collection');
    }
  }).clone()
};
