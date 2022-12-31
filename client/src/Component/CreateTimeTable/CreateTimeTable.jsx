import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AssignTeachers from "./AssignTeachers";
import TimeSelect from "./TimeSelect";
import TimeView from "./TimeView";
import SelectDep from "./SelectDep";
import { useState } from "react";
import ViewAllTT from "./ViewAllTT";
import SelectAllTS from "./SelectAllTS";
function CreateTimeTable() {
  const [choosedDep, setchoosedDep] = useState(1)
  return (
    <Routes>
      <Route path="/" element={<SelectDep choosedDep={choosedDep} setchoosedDep={setchoosedDep}/>} />
      <Route path="/AssignTeachers" element={<AssignTeachers choosedDep={choosedDep} />} />
      {/* <Route path="/TimeSelect" element={<TimeSelect />} /> */}
      <Route path="/ViewAllTT" element={<ViewAllTT />} />
      <Route path="/TimeView" element={<TimeView />} />
      <Route path="/TimeSelect" element={<SelectAllTS />} />
    </Routes>
  );
}

export default CreateTimeTable;
