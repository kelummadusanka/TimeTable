import React from "react";
import "./LecDashboard.css";
import LecGreetings from "../LecGreetings/LecGreetings.jsx";
import Lecupcomevents from "../Lecupcomevents/Lecupcomevents.jsx";
//import Lecdailysch from "../Lecdailysch/Lecdailysch.jsx";
//import Lecweeklysch from "../Lecweeklysch/lecweekly.jsx";
import Lecsch from "../Lecsch/lecsch.jsx";
import Lecschweek from "../Lecschweek/Lecschweek.jsx";
import LecUce from "../LecUce/uce.jsx";
//import Lectable from "../Lectable/Lectable.jsx";
import Lectable1 from "../Lectable1/Lectable1.jsx";
import LecWeekly1 from "../LecWeekly1/LecWeekly1.jsx";
import LecButton1 from "../LecButton1/LecButton1";
import LecButton2 from "../LecButton2/LecButton2";
import { Link } from "react-router-dom";

function LecDashboard() {
  return (
    <div >
      <div >
        <LecGreetings />
      </div>
      <div class="row my-row2">
        <Lecsch />
      </div>
      <div class="row my-row3">
        <div className="col-md-7 my-col1">
          <Link to={'/Lecturer/DailySchedule'}>
            <LecButton1 />
          </Link>
        </div>
      </div>
      <Lectable1 />

      <Lecschweek />
      <Link to={'/Lecturer/WeeklySchedule'}>

      <LecButton2 />
      </Link>
      <LecWeekly1 />

      <LecUce />
      <Lecupcomevents />
    </div>
  );
}
export default LecDashboard;
