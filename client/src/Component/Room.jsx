import {
  Flex,
  Heading,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Divider,
  Spacer,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Logo from "../Images/lectrure_rooms.png";
function Room() {
  const [Rooms, setRooms] = useState([]);
  const [Department, setDepartment] = useState();
  const [RoomName, setRoomName] = useState();
  const [depid, setdepid] = useState(0);
  const toast = useToast();
  function onChangeFun(e) {
    if (e.target.name === "Department") {
      let a = "depID";
      let dpid;
      if (e.target.value === "Electrical and Information") {
        dpid = 1;
      }

      if (e.target.value === "Civil and Environmental") {
        dpid = 2;
      }

      if (e.target.value === "Mechanical and Manufacturing") {
        dpid = 3;
      }

      if (e.target.value === "Common") {
        dpid = 4;
      }

      console.log(dpid);

      setRooms((Rooms["depID"] = dpid));

      console.log(Rooms);
    }

    setRooms({ ...Rooms, [e.target.name]: e.target.value });
  }

  function Roomsave() {
    axios
      .post("http://localhost:4000/app/Rooms/createRoom", Rooms)
      .then((res) => {
        if (res) {
          toast({
            title: "Added Room Successfully!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          toast({
            title: error.response.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          console.log(error.message);
          toast({
            title: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  }

  return (
    <Flex
      pos={"relative"}
      w="full"
      p="15px"
      h="full"
      borderWidth="2px"
      borderRadius={12}
    >
      <VStack alignItems={"baseline"} p="15px" maxW={600} h={"full"}>
        <Flex>
          <Heading as="h3" size="lg">
            Rooms
          </Heading>
        </Flex>

        <VStack h={"full"} justifyContent="space-between" maxH="300px">
          <FormControl>
            <FormLabel>Deparment</FormLabel>
            <Select bg={"white"} name="Department" onChange={onChangeFun}>
              <option>Electrical and Information</option>
              <option>Civil and Environmental</option>
              <option>Mechanical and Manufacturing</option>
              <option>Common</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Room Name</FormLabel>
            <Input
              placeholder="Cambio"
              bg={"white"}
              name="RoomName"
              onChange={onChangeFun}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Capacity</FormLabel>
            <Input
              placeholder="50"
              bg={"white"}
              name="Capacity"
              onChange={onChangeFun}
            />
          </FormControl>

          {/* <FormControl isRequired>
            <FormLabel>Capcity</FormLabel>
            <Input placeholder="250" bg={"white"}/>
          </FormControl> */}
        </VStack>

        <Spacer></Spacer>
        <Divider></Divider>
        <HStack
          pt={3}
          w={"full"}
          alignSelf={"flex-end"}
          justifyContent={"space-between"}
        >
          {/* <Button width={100} onClick={ClearAll} colorScheme="whatsapp" variant="outline">
            Cancel
          </Button> */}

          <Button colorScheme="whatsapp" width={100} onClick={Roomsave}>
            Save
          </Button>
        </HStack>
      </VStack>
      <Image
        pos={"absolute"}
        right="0px"
        bottom="0px"
        zIndex={-1}
        src={Logo}
        w={700}
        h={280}
      ></Image>
    </Flex>
  );
}

export default Room;
