import { React, useEffect } from "react";
import {
  HStack,
  VStack,
  Center,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// const Rows = [
//   {
//     age: "EG/2018/3387",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3388",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
//   {
//     age: "EG/2018/3389",
//     name: "Dr.Chathura Senavirathne",
//     regNo: "Electrical and information",
//     regNo2: "chathura@engug.ruh.ac.lk",
//   },
// ];

function TableRow({ Row }) {
  const disRow = {
    regNo: Row.regNo,
    name: Row.honorific + " " + Row.firstname + " " + Row.lastname,
    eamil: Row.email,
    department: Row.department,
  };
  const array = Object.values(disRow);

  return (
    <HStack
      my={0}
      py={1.5}
      px={5}
      bgGradient="linear(to right, #4facfe 0%, #00f2fe 100%)"
      //bgGradient={"linear( 109.5deg,  rgba(76,221,242,1) 11.2%, rgba(92,121,255,1) 91.1% )"}
      borderRadius={"3xl"}
      w="full"
      justifyContent="space-between"
      //onClick={(array.regNo)}
    >
      {array.map((item, key) => {
        return (
          <Center h={10} w={"full"} key={key} justifyContent={'left'}>
            <Text
              textAlign={"left"}
              h={5}
              fontSize="sm"
              fontWeight={"medium"}
              noOfLines={1}
            >
              {item}
            </Text>
          </Center>
        );
      })}
    </HStack>
  );
}

function TableRows() {
  //{ Rows, SearchString }
  const [Rows, setRows] = useState([]);
  const [FilterdRows, setFilterdRows] = useState([]);
  const [SearchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/app/Lecturer/getlecturer").then((res) => {
      setRows(res.data);
    });
  }, []);
  

  return (
    <VStack
      overflow={"auto"}
      //maxH="500px"
      borderRadius={"3xl"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      w={"full"}
    >
        <InputGroup w={"50%"} mb={"2"} bg="white" borderRadius="3xl">
          <InputRightElement
            pointerEvents="none"
            children={<FcSearch color="gray.300" bg={"red"} />}
          />
          <Input
            placeholder="Search anything!"
            size="md"
            borderRadius="3xl"
            onChange={(e) => setSearchString(e.target.value.trim().toLowerCase())}
          />
        </InputGroup>

      {Rows
        .filter((item) => {
          if (SearchString === "") {
            return item;
          } else if (
            item.regNo.toString().toLowerCase().match(SearchString) ||
            item.firstname.toString().toLowerCase().match(SearchString) ||
            item.lastname.toString().toLowerCase().match(SearchString) ||
            item.gender.toString().toLowerCase().match(SearchString) ||
            item.honorific.toString().toLowerCase().match(SearchString) ||
            item.department.toString().toLowerCase().match(SearchString) ||
            item.module.toString().toLowerCase().match(SearchString) ||
            item.email.toString().toLowerCase().match(SearchString) ||
            item.phone.toString().toLowerCase().match(SearchString)
          ) {
            return item;
          }
        })
        .map((Row, key) => {
          return <TableRow key={key} Row={Row} />;
        })}
    </VStack>
  );
}

function LectureList() {

  return (
    <VStack
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      //w={"-webkit-fit-content"}
      w="full"
      maxW={"950px"}
      flex="3"
      p="2px"
    >
      <VStack
        overflow={"auto"}
        maxH="500px"
        borderRadius={"3xl"}
        p={"2.5"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        bg="#CCE4EB"
        // w={"-webkit-fit-content"}
        w={"full"}
      >

        <TableRows />
      </VStack>

      <Link to="/admin/Lecturer/Create" w="full" textDecor="none">
        <Button colorScheme="teal" size="sm" w={"full"}>
          Create New Lecture
        </Button>
      </Link>
    </VStack>
  );
}

export default LectureList;
