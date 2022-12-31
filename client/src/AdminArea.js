import AdminLayout from "./Component/AdminLayout";
import LecCreate from "./Component/LecCreate";
import Module from "./Component/Module";
import Room from "./Component/Room";
import CreateTimeTable from "./Component/CreateTimeTable/CreateTimeTable";
import Nav from "./Component/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { Flex, Text, VStack } from "@chakra-ui/react";
import Dashboard from "./Component/AdminStudentAdd";
function AdminArea() {
  return (
    <VStack
      spacing={0}
      flexDirection={"column"}
      w="full"
      h={"100vh"}
      overflow="hidden"
    >
      <VStack
        h={"200px"}
        w="full"
        bgGradient='linear(to-l, #7928CA, #FF0080)' 
        justifyContent="center"
        alignItems={"center"}
      >
        <Text></Text>
      </VStack>

      <Flex h={"full"} w={6 / 8}>
        <Flex as={"nav"} w="20%" h={"full"}>
          <Nav />
        </Flex>
        <Flex bg={"gray.10"} w="full" p={"25px"} pb="20px" h="full">
          <Routes>
            <Route path="/*" element={<CreateTimeTable />} />
            <Route path="/Lecturer" element={<AdminLayout />} />
            <Route path="/Lecturer/Create/*" element={< LecCreate/>} />
            <Route path="/Module" element={<Module />} />
            <Route path="/Room" element={<Room />} />
            <Route path="/Student" element={<Dashboard />} />
            <Route
              path="/CreateTimeTable/*"
              element={<CreateTimeTable />}
            ></Route>
          </Routes>
        </Flex>
      </Flex>
      <Flex></Flex>
    </VStack>
  );
}

export default AdminArea;
