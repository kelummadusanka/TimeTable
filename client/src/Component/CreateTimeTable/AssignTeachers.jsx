import {
  Flex,
  Heading,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Button,
  Divider,
  IconButton,
  Text,
  Spacer,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useToast } from "@chakra-ui/react";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import NavigationArrow from "./NavigationArrow";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Departments = [
  {
    id: 1,
    name: "Electrical and Inforamtion",
    DepCode: "EE",
    //image: Power_Station,
  },
  {
    id: 2,
    name: "Civil and Environmental",
    DepCode: "CE",
    //image: CivilEngineer,
  },
  {
    id: 3,
    name: "Mechanical and Manufacturing",
    DepCode: "ME",
    //image: MechanicalEngineer,
  },
];

function TeachersModule({ setArray, Type, Pairs, Array }) {
  const removeObject = (e) => {
    setArray(Array.filter((item) => item !== Pairs));
    console.log(e.target);
  };
  return (
    <VStack
      pos={"relative"}
      alignItems={"baseline"}
      w={Type === "Semester" ? "full" : "300px"}
      h={Type === "Semester" ? "full" : ""}
      p={Type === "Semester" ? "8px" : "10px 16px"}
      borderRadius="12px"
      maxW={Type === "Semester" ? 250 : ""}
      border="1px solid #E2E8F0"
      spacing={Type === "Semester" ? 2 : 1}
    >
      <IconButton
        size={"xs"}
        pos={"absolute"}
        top="3px"
        right={"3px"}
        variant="outline"
        colorScheme="red"
        aria-label="Call Sage"
        fontSize="14px"
        icon={<AiOutlineClose />}
        onClick={removeObject}
      />
      <Text
        fontWeight={Type === "Semester" ? 700 : 600}
        fontSize={Type === "Semester" ? "20px" : "16px"}
      >
        {Type === "Semester" ? Pairs.semester : Pairs.Module}
      </Text>
      <Text
        fontWeight={500}
        color={"gray.500"}
        fontSize={Type === "Semester" ? "14px" : "11px"}
      >
        {Type === "Semester"
          ? `${Pairs.Teachers.length}-Modules/Lecturers`
          : Pairs.teacher}
      </Text>
    </VStack>
  );
}

function AssignTeachers() {
  const location = useLocation();
  const choosedDep = location.state;
  const toast = useToast();
  const [modWithTeacs, setmodWithTeacs] = useState([]);
  const [modWithTeac, setmodWithTeac] = useState({ depID: choosedDep });
  const [modOfSems, setmodOfSems] = useState([]);
  const [disabled, setdisabled] = useState(false);
  const [Module, setModule] = useState([]);
  const [Lect, setLect] = useState([]);
  const [semester, setsemester] = useState([3,4,5,7,8]);

  const addSem = () => {
const sems =parseInt(modWithTeac.semester.split(" ")[1])

    setmodOfSems([
      ...modOfSems,
      { semester: sems, Teachers: modWithTeacs },
    ]);
    setdisabled(false);
    setsemester(semester.filter((s)=>s!==sems))
    setmodWithTeacs([]);

    console.log(modOfSems);
  };

  function onChangeFun(e) {
    setmodWithTeac({ ...modWithTeac, [e.target.name]: e.target.value });
    if (e.target.name === "semester") {
      setdisabled(true);
    }
  }
  const addObject = () => {
    if (modWithTeacs.includes(modWithTeac)) {
      toast({
        title: "Already Exist!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setmodWithTeacs([...modWithTeacs, modWithTeac]);
    }

    console.log(modWithTeac);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/app/Module/getModule").then((res) => {
      setModule(
        res.data.filter((mod) => {
          const arr = mod.Modcode.split("");
          const depCode = arr[0] + arr[1];
          const semcode = parseInt(arr[2]);

          const choosedepCode = Departments.filter((dep) => {
            if (dep.id === choosedDep) {
              return dep;
            }
          })[0].DepCode;

          if (typeof modWithTeac.semester !== "undefined") {
            const choosedsem = parseInt(modWithTeac.semester.split(" ")[1]);
            if (depCode === choosedepCode && semcode == choosedsem) {
              return mod;
            }
          }
        })
      );
    });

    axios.get("http://localhost:4000/app/Lecturer/getlecturer").then((res) => {
      setLect(
        res.data.filter((lec) => {
          if (lec.depID === choosedDep) {
            return lec;
          }
        })
      );
    });
  }, [modWithTeac.semester]);

  return (
    <VStack
      pos={"relative"}
      p="15px"
      pb={"5px"}
      h="full"
      w={"full"}
      borderWidth="2px"
      borderRadius={12}
      alignItems="baseline"
    >
      <Flex>
        <Heading as="h3" size="lg">
          Assign Modules for teachers
        </Heading>
      </Flex>

      <HStack alignItems={"baseline"} spacing="100px" h={"full"} w={"full"}>
        <VStack
          maxH={450}
          h="full"
          justifyContent={"space-between"}
          w="full"
          maxW="40%"
        >
          <FormControl>
            <FormLabel>Deparment</FormLabel>
            <Input
              isDisabled
              bg={"white"}
              name="deparment"
              onChange={onChangeFun}
              value={
                Departments.filter((dep) => {
                  if (dep.id === choosedDep) {
                    return dep;
                  }
                })[0].name
              }
            ></Input>
          </FormControl>


          <FormControl width={"full"}>
            <FormLabel>Semester</FormLabel>
          <Flex w={"full"} alignSelf={"flex-start"}>
            <Select
              isDisabled={disabled}
              bg={"white"}
              name="semester"
              onChange={onChangeFun}
            >
              {
                semester.map(se=>{
                  return <option>Semester 0{se} </option>
                })
              }

            </Select>
          <IconButton display={disabled?'flex':'none'} onClick={()=>setdisabled(false)} aria-label="Edit semseter" icon={disabled?<HiOutlineLockClosed size={22}/>:<HiOutlineLockOpen  size={22}/>}></IconButton>
          </Flex>
          </FormControl>

          <FormControl>
            <FormLabel>Module</FormLabel>
            <Select bg={"white"} name="Module" onChange={onChangeFun}>
              {Module.map((modu) => {
                return <option>{modu.Modcode + " " + modu.ModName}</option>;
              })}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Teacher</FormLabel>
            <Select bg={"white"} name="teacher" onChange={onChangeFun}>
              {Lect.map((lect) => {
                return (
                  <option >
                    {lect.honorific +
                      " " +
                      lect.firstname +
                      " " +
                      lect.lastname}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Button colorScheme={"teal"} size="md" onClick={addObject} w={"full"}>
            Add
          </Button>
        </VStack>
        {modWithTeacs.length ? (
          <VStack
            alignItems={"baseline"}
            p="15px"
            maxW={"fit-content"}
            borderWidth="2px"
            borderRadius={12}
            overflow="auto"
            maxH={"400px"}
          >
            {modWithTeacs.map((modWithTeac, key, arr) => (
              <TeachersModule
                key={key}
                Pairs={modWithTeac}
                Type="ModuleTeac"
                setArray={setmodWithTeacs}
                Array={arr}
              />
            ))}

            <Button colorScheme={"teal"} size="md" onClick={addSem} w={"full"}>
              Add All
            </Button>
          </VStack>
        ) : (
          ""
        )}
      </HStack>
      {modOfSems.length ? (
        <HStack
          p="10px"
          h="full"
          w={"full"}
          borderWidth="2px"
          borderRadius={12}
          maxH={100}
          justifyContent="space-around"
        >
          {modOfSems.map((modOfSems, key, arr) => (
            <TeachersModule
              key={key}
              Type="Semester"
              Pairs={modOfSems}
              Semester={modOfSems.semester}
              setArray={setmodOfSems}
              Array={arr}
            />
          ))}
        </HStack>
      ) : (
        <></>
      )}
      <NavigationArrow
        onClick={() => console.log(modWithTeacs)}
        sendNext={modOfSems}
        next="/admin/CreateTimeTable/TimeSelect"
        back="/admin/"
      />
    </VStack>
  );
}

export default AssignTeachers;
