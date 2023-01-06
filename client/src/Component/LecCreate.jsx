import {
  Flex,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  List,
  ListItem,
  ListIcon,
  Button,
  InputGroup,
  InputLeftAddon,
  Divider,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Checkbox,
  CheckboxGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiUser, BiCamera, BiBookAlt } from "react-icons/bi";
import axios from "axios";
import PreferencesTable from "./PreferencesTable";
import { useEffect } from "react";


var ModuleList = [
  "EE4301 Signal and System",
  "EE5302 Communication System",
  "EE6301 Signal and System",
  "EE1101 Introduction to programming I",
  "EE2101 Introduction to programming II",
  "EE3302 Data structures and Algorithm",
];

function LecCreate() {
  const toast = useToast();
  const [Lecturer, setLecturer] = useState([]);
  const [sltdMod, setsltdMod] = useState([]);
  const [disModules, setdisModules] = useState([]);
  const [showTable, setshowTable] = useState(false);
  const [likes, setlikes] = useState([]);
  const [unlikes, setunlikes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function onChangeFun(e) {
    if (e.target.name === "department") {
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

      setLecturer((Lecturer["depID"] = dpid));
      console.log(Lecturer);
    }
    setLecturer({ ...Lecturer, [e.target.name]: e.target.value });
  }

  function SaveLecturer() {
    axios
      .post("http://localhost:4000/app/Lecturer/createLecture", Lecturer)
      .then((res) => {
        if (res) {
          toast({
            title: "Added Lecturer Successfully!",
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

  const GetSelModules = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    if (checked) {
      setsltdMod([...sltdMod, value]);
    } else {
      setsltdMod(sltdMod.filter((e) => e !== value));
    }
  };

  const displayModules = () => {
    setdisModules([...new Set(sltdMod)]);
    setLecturer({ ...Lecturer, module: sltdMod });
    onClose();
  };

  return (
    <VStack
      alignItems={"baseline"}
      maxW="fit-content"
      spacing={8}
      bg="#F5F5F5"
      p={"20px"}
      borderRadius={"18px"}
      bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
      <Flex
        px={"25px"}
        py={"15px"}
        borderRadius={"25px"}
        bg={"gray.100"}
        w="986px"
        h={"647px"}
        justifyContent={"space-between"}
        //bgGradient='linear(to-t, pink.100, #FFF)'
      >
        <VStack alignItems={"baseline"}>
          <Heading as="h5" fontSize={"20px"}>
            Personal detail
          </Heading>
          <FormControl isRequired>
            <FormLabel>Register No.</FormLabel>
            <Input
              placeholder="Register No."
              bg={"white"}
              name="regNo"
              onChange={onChangeFun}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              bg={"white"}
              name="firstname"
              onChange={onChangeFun}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              bg={"white"}
              name="lastname"
              onChange={onChangeFun}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Honorific</FormLabel>
            <Select bg={"white"} name="honorific" onChange={onChangeFun}>
              <option>Prof.</option>
              <option>Dr.</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Miss.</option>
            </Select>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup
              defaultValue="Male"
              bg={"white"}
              p="8px"
              borderRadius={"5px"}
            >
              <HStack spacing="24px">
                <Radio value="Male" name="gender" onChange={onChangeFun}>
                  Male
                </Radio>
                <Radio value="Female" name="gender" onChange={onChangeFun}>
                  Female
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Profile photo</FormLabel>

            <Flex
              w={"100px"}
              bg="gray.200"
              h={"100px"}
              display="flex"
              pos={"relative"}
              alignItems="center"
              justifyContent={"center"}
              borderRadius="30px"
            >
              <BiUser color="#BABABA" size={"85px"} />

              <Input
                type={"file"}
                opacity="0"
                w={"full"}
                h="full"
                pos="absolute"
                top="0"
                left="0"
                zIndex={1}
                cursor={"pointer"}
              />
              <Flex
                opacity={0.5}
                height={"30px"}
                bg="gray.50"
                w={"full"}
                pos="absolute"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <BiCamera size={"full"} opacity="0.8" />
              </Flex>
            </Flex>
          </FormControl>
        </VStack>
        <Divider orientation="vertical" width={"5px"} size={"full"} />
        <VStack alignItems={"baseline"}>
          <Heading as="h5" fontSize={"20px"}>
            Teaching detail
          </Heading>
          <FormControl>
            <FormLabel>Deparment</FormLabel>
            <Select bg={"white"} name="department" onChange={onChangeFun}>
              <option>Electrical and Information</option>
              <option>Civil and Environmental</option>
              <option>Mechanical and Manufacturing</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Modules</FormLabel>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={() => {
                setsltdMod([]);
                onOpen();
              }}
              w={"full"}
              size="md"
            >
              Select module
            </Button>

            <List spacing={3} pl={"20px"} my="15px">
              {disModules.map((Module, key) => (
                <ListItem key={key}>
                  <ListIcon as={BiBookAlt} color="green.500" />
                  {Module}
                </ListItem>
              ))}
            </List>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={() => setshowTable(true)}
              w={"full"}
              size="md"
            >
              Preferred hours
            </Button>

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
                      {ModuleList.map((module, key) => {
                        return (
                          <Checkbox
                            key={key}
                            value={module}
                            onChange={GetSelModules}
                          >
                            {module}
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
                  <Button colorScheme="teal" onClick={displayModules}>
                    Save
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </FormControl>
          <PreferencesTable
            setshowTable={setshowTable}
            showTable={showTable}
            Lecturer={Lecturer}
            likes={likes}
            unlikes={unlikes}
            setLecturer={setLecturer}
            setlikes={setlikes}
            setunlikes={setunlikes}
          />
        </VStack>
        <Divider orientation="vertical" width={"5px"} size={"full"} />

        <VStack alignItems={"baseline"}>
          <Heading as="h5" fontSize={"20px"}>
            Contact detail
          </Heading>
          <FormControl>
            <FormLabel> Phone number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+94" />
              <Input
                type="tel"
                placeholder="phone number"
                bg={"white"}
                name="phone"
                onChange={onChangeFun}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              bg={"white"}
              placeholder="Email"
              name="email"
              onChange={onChangeFun}
            />
          </FormControl>
        </VStack>
      </Flex>

      <Flex alignSelf={"flex-end"}>
        <Button
        borderWidth={2}
          mr={"25px"}
          colorScheme="whatsapp"
          px={20}
          size="md"
          alignSelf={"flex-end"}
          onClick={SaveLecturer}
          color='white'
        >
          Create Lecture
        </Button>
      </Flex>
    </VStack>
  );
}

export default LecCreate;
