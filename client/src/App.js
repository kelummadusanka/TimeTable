import AdminArea from "./AdminArea";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LectureArea from "./Lecturer/Lecturer";
import { Flex, Text, VStack } from "@chakra-ui/react";
import StudentHome from "./Student/StudentHome";
import Start_page from "./Start_page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start_page />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin/*" element={<AdminArea />} />
        <Route path="/Lecturer/*" element={<LectureArea />} />
        <Route path="/student/*" element={<StudentHome />} />
      </Routes>
    </>
  );
}

export default App;
