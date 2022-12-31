import React from "react";
import "./ForgotPassword";
import { useForm } from "react-hook-form";
import { Image } from "@chakra-ui/react";
import Clock from "../Images/TimeTable2.png"

import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Select,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate  = useNavigate ();
  const toast = useToast();
  const VARIANT_COLOR = "teal";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  const onSubmit = async data => { 
  
    
    const login = {
      regNo: data.Username,
      password: data.password,
    };

    if(data.role==="admin"){
      axios.post("http://localhost:4000/app/admin/getAdmin",login)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("user",JSON.stringify(response.data.username))
          const user = response.data.username;
          window.location = "/admin";
        }
      )
      .catch((error) => {
        //console.log(error.message);
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

    if(data.role==="student"){
      axios.post("http://localhost:4000/app/Student",login)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("user",JSON.stringify(response.data.username))
          const user = response.data.username;
          Navigate("/student",{ state: response.data })
        }
      )
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

    else if(data.role==="lecturer"){

      axios.post("http://localhost:4000/app/Lecturer/LoginLecture",login)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("user",JSON.stringify(response.data.username))

          toast({
            title: "Authenciated! "+ response.data.firstname,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          window.location = "/Lecturer";
        }
      )
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
    } else{
      toast({
        title: "Select Your Role!!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

    }

    }

  return (
    <Flex
      m={"auto"}
      minHeight="100vh"
      w={500}
      align="center"
      justifyContent="center"
    >
      <Box
        borderWidth={1}
        px={4}
        width="400%"
        maxWidth="1000px"
        borderRadius={8}
        textAlign="center"
        boxShadow="lg">
        <Box p={8}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
            mb={5}
          >
            Time Table Management System
          </Text>
 
            <Heading as="h1" fontWeight="500" fontSize="26px" textAlign={'left'}>
              Login
            </Heading>

          <Box my={8} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                 {...register("Username")}
                  placeholder="Enter your username"
                />
                <div className="container mt-2"></div>
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>User type</FormLabel>
              </FormControl>

              <Select placeholder="Select category" mt={4}  {...register("role")}>
                <option value="admin">Admin</option>
                <option value="lecturer">Lecturer</option>
                <option value="student">Student</option>
              </Select>

              <Stack isInline justifyContent="space-between" mt={4}>
                <Box>
                  <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link href="/ForgotPassword" color={`${VARIANT_COLOR}.400`}>
                    Forgot your password?
                  </Link>
                </Box>
              </Stack>

                <Button type="submit" variantColor="teal" width="full" mt={4}>
                  Sign In
                </Button>
            </form>
          </Box>
        </Box>
      </Box>
      <Image
        pos={"absolute"}
        right="0px"
        bottom="0px"
        zIndex={-1}
        src={Clock}
        w={600}
        h={320}
      ></Image>
    </Flex>
  );
}

export default Login;
