import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiHelpCircle,
  FiUploadCloud,
} from "react-icons/fi";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      //left="5"
      h="full"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      //w={navSize == "small" ? "75px" : "200px"}
      w="full"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        {/* <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="Input the description for the dashboard."
        /> */}
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Create Time Table"
          to="/admin/CreateTimeTable"
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="View Time Table"
          to="/admin/CreateTimeTable/ViewAllTT"
        />

        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="Lecturers"
          to="/admin/Lecturer"
        />

        <NavItem
          navSize={navSize}
          icon={FiBriefcase}
          title="Modules"
          to="/admin/Module"
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Lecture Rooms"
          to="/admin/Room"
        />
        <NavItem navSize={navSize} icon={FiHelpCircle} title="Help" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm" color="purple.800">
              Admin 
            </Heading>
            <Text color="black">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
