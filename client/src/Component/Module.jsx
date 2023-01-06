import {
  Flex,
  Heading,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  List,
  Divider,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  CheckboxGroup,
  Stack,
  ListItem,
  IconButton,
  Text,
  Spacer,
  Checkbox,
  useToast,
  Image
} from "@chakra-ui/react";
import axios from "axios";
import Book from "../Images/TimeTable.png";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Module() {
  const toast = useToast();
  const [selLecturer, setselLecturer] = useState([]);
  const [DispLecturer, setDispLecturer] = useState([]);
  const [DrawerLecturer, setDrawerLecturer] = useState([]);
  const [ModLastPart, setModLastPart] = useState("");
  const [calluseeffet, setcalluseeffet] = useState(true);
  const [ModeCode, setModeCode] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Module, setModule] = useState([]);
  const btnRef = React.useRef();

  function onChangeFun(e) {
    setcalluseeffet(!calluseeffet)

    if (e.target.name === "Department") {

      let a="depID";
      let dpid;
      if (e.target.value === "Electrical and Information") {
        dpid= 1;
      }

      if (e.target.value === "Civil and Environmental") {
        dpid= 2;
      }

      if (e.target.value === "Mechanical and Manufacturing") {
        dpid= 3;
      }

      if (e.target.value === "Common") {
        dpid= 4;
      }

      console.log(dpid)

      setModule(Module["depID"]=dpid);

    }

    setModule({ ...Module, [e.target.name]: e.target.value });
  }
  useEffect(() => {

    axios
      .get("http://localhost:4000/app/Module/getModule")
      .then((res) => {
console.log(res.data.filter(re=> re.Semester==Module.Semester))
        const filres= res.data.filter(re=>re.depID===Module.depID && re.Semester==Module.Semester)
        console.log(filres)


          if (filres.length < 9) {
            var x = filres.length + 1;
            setModLastPart("0" + x);
          } else {
            setModLastPart(filres.length + 1);
          }
     
        


        }

        ).catch((error) => {})

    axios
      .get("http://localhost:4000/app/Lecturer/getlecturer")
      .then((res) => {
        setDrawerLecturer(res.data);
      })
      .catch((error) => {});
  }, [calluseeffet]);

  function Modulesave() {
    console.log(Module)
    axios
      .post("http://localhost:4000/app/Module/createModule", Module)
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
      console.log(calluseeffet)

      setcalluseeffet(!calluseeffet)
  }

  const GetSelLectures = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    if (checked) {
      setselLecturer([...selLecturer, value]);
    } else {
      setselLecturer(selLecturer.filter((e) => e !== value));
    }
  };

  const displayLectures = () => {
    setDispLecturer([...new Set(selLecturer)]);
    setModule({ ...Module, AssignedLec: selLecturer });
    onClose();
  };

  const gereateCode = () => {
    setcalluseeffet(!calluseeffet)
    if (Module.Department === "Electrical and Information") {
      setModeCode(
        "EE" + Module.Semester + "" + Module.ModCredit + "" + ModLastPart
      );
    }
    if (Module.Department === "Civil and Environmental") {
      setModeCode(
        "CE" + Module.Semester + "" + Module.ModCredit + "" + ModLastPart
      );
    }
    if (Module.Department === "Mechanical and Manufacturing") {
      setModeCode(
        "ME" + Module.Semester + "" + Module.ModCredit + "" + ModLastPart
      );
    }
    setModule({ ...Module, Modcode: ModeCode });
    console.log(ModeCode);
  };

  return (
    <VStack
      alignItems={"baseline"}
      p="30px"
      //maxW={"fit-content"}
      borderWidth="2px"
      borderRadius={12}
      w="full"
      h={"full"}
    >
      <Flex>
        <Heading as="h3" size="lg">
          Module
        </Heading>
      </Flex>

      <HStack alignItems={"baseline"} spacing="100px" h={"full"} maxH={"450px"}>
        <VStack justifyContent={"space-between"} h="full" w={"full"}>
          <FormControl>
            <FormLabel>Deparment</FormLabel>
            <Select bg={"white"} name="Department" onChange={onChangeFun}>
            <option>-- </option>
              <option>Electrical and Information</option>
              <option>Civil and Environmental</option>
              <option>Mechanical and Manufacturing</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Semester</FormLabel>
            <Select bg={"white"} name="Semester" onChange={onChangeFun}>
            <option>-- </option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Allocated Lecture hours</FormLabel>
            <Input
              placeholder="42"
              bg={"white"}
              name="LecHours"
              onChange={onChangeFun}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Credit</FormLabel>
            <Select bg={"white"} name="ModCredit" onChange={onChangeFun}>
            <option>-- </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Module Code</FormLabel>
            <InputGroup>
              <Input type="tel" value={ModeCode} isDisabled />
              <InputRightAddon bg={"transparent"} p="1">
                <Button colorScheme="teal" w={"full"} onClick={gereateCode}>
                  Generate code
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </VStack>
        <VStack
          alignItems={"baseline"}
          justifyContent={"space-between"}
          w="full"
        >
          <FormControl isRequired>
            <FormLabel>Module Name</FormLabel>
            <Input
              placeholder="Introduction to Electrical Engineering"
              bg={"white"}
              mb={4}
              name="ModName"
              onChange={onChangeFun}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Capacity</FormLabel>
            <Input
              placeholder="75"
              bg={"white"}
              mb={4}
              name="Capacity"
              onChange={onChangeFun}
            />
          </FormControl>
          
          <FormControl>
            <FormLabel>Assign Lectures</FormLabel>
            <Button colorScheme="teal" onClick={onOpen}>
              Select Lectures
            </Button>
            <List spacing={3} pl={"20px"} mt="15px">
              {DispLecturer.map((lec, key) => (
                <ListItem key={key}>
                  <Flex
                    bg={"gray.50"}
                     
                    opacity='0.7'
                    borderWidth="2px"
                    p="5px"
                    borderRadius="lg"
                    justifyContent={"space-between"}
                  >
                    <Text placeholder="Enter amount" maxW={250} >
                      {lec}
                    </Text>
                    <IconButton
                      marginLeft={15}
                      size={"xs"}
                      isRound
                      variant="outline"
                      colorScheme="red"
                      aria-label="Send email"
                      icon={<AiOutlineClose />}
                    />
                  </Flex>
                </ListItem>
              ))}
            </List>

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Select Moudles</DrawerHeader>

                <DrawerBody>
                  <Input
                    placeholder="Search here..."
                    mb={"25px"}
                    overflow="auto"
                  />
                  <CheckboxGroup
                    colorScheme="green"
                    //defaultValue={[]}
                  >
                    <Stack spacing={5} direction={"column"}>
                      {DrawerLecturer.map((lec, key) => {
                        return (
                          <Checkbox
                            key={key}
                            value={
                              lec.honorific +
                              " " +
                              lec.firstname +
                              " " +
                              lec.lastname
                            }
                            onChange={GetSelLectures}
                          >
                            {lec.honorific +
                              " " +
                              lec.firstname +
                              " " +
                              lec.lastname}
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </CheckboxGroup>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="teal" onClick={displayLectures}>
                    Save
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </FormControl>
          
        </VStack>
        
      </HStack>
      <Image
        pos={"absolute"}
        right="
        360px"
        bottom="150px"
        zIndex={-1}
        src={Book}
        w={460}
        h={280}
      />
      <Spacer></Spacer>
      <Divider></Divider>
      <Spacer></Spacer>
      <HStack
        spacing={"25px"}
        alignSelf={"flex-end"}
        justifyContent={"space-between"}
      >
        <Button
          width={100}
          colorScheme="whatsapp"
          variant="outline"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button colorScheme="whatsapp" width={100} onClick={Modulesave}>
          Save
        </Button>
      </HStack>
      
     
    </VStack>
  );
}

export default Module;
