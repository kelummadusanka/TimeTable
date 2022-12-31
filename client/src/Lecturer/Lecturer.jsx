import { Routes, Route } from "react-router-dom";
import LecDashboard from "./LecDashboard/LecDashboard";
import DailySchedule from "./L2/DailySchedule/DailySchedule";
import WeeklySchedule from "./L3/WeeklySchedule/WeeklySchedule";
function LectureArea() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LecDashboard />} />
        <Route path="/WeeklySchedule" element={<WeeklySchedule />} />
        <Route path="/DailySchedule" element={<DailySchedule />} />
      </Routes>
    </>
  );
}

export default LectureArea;