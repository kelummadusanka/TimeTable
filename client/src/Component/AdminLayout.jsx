import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import DepSlect from "./DepSlect";
import LectureList from "./LecListItems/LecListItems";
import Recent from "./Recent";
import React from "react";

function AdminLayout() {
  return (
    <Flex
      p="25px"
      h="full"
      w={"full"}
      borderWidth="2px"
      justifyContent={"space-between"}
      borderRadius={12}
      direction={"column"}
    >
      <DepSlect />

      <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"}>
        <LectureList />
        <Recent />
      </Flex>
    </Flex>
  );
}

export default AdminLayout;
