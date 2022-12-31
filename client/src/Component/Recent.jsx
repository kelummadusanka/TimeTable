import {
  Heading,
  VStack,
  Divider,
  HStack,
  Avatar,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const RecentLecture =[
  {name:'Dr.Chathura Seanvirathne',email:'chathura@engug.ruh.ac.lk'},
  {name:'Dr.Chandana Perera',email:'chandana@engug.ruh.ac.lk'},
  {name:'Dr.Chaminda Karunasena',email:'chaminda@engug.ruh.ac.lk'},
  {name:'Dr.Sujeewa Wimalasena',email:'sujeewa@engug.ruh.ac.lk'},
  {name:'Dr.Ruwan Appuhami',email:'ruwan@engug.ruh.ac.lk'},
]

function Recent() {
  return (
    <VStack
      p={6}
      h="full"
      bgGradient={"linear(to bottom, #cd9cf2 8%, #f6f3ff 100%)"}
      //bg={"#F4F3FF"}
      //alignItems={"baseline"}
      w="full"
      maxW={'330px'}
      borderRadius={"32px"}
      ml={4}
    >
      <Heading as="h3" size="lg" alignSelf={"center"}>
        Recent lectures
      </Heading>

      <Divider orientation="horizontal" size={"lg"} w="full" />
      <VStack spacing={"35px"}>
        {RecentLecture.map((RecLec,key)=>{
          return(
            <HStack>
            <WrapItem>
              <Avatar
                size={"md"}
                name="Segun Adebayo"
                //src="https://bit.ly/sage-adebayo"
                color={"#718096"}
              />
            </WrapItem>
            <VStack h={"full"} alignItems={"flex-start"} spacing={0}>
              <Text color={"#2D3748"} fontWeight="medium">
                {RecLec.name}
              </Text>
              <Text color={"#718096"} fontsize={"14px"}>
              {RecLec.email}
              </Text>
            </VStack>
          </HStack>
          )
        })}

      </VStack>
    </VStack>
  );
}

export default Recent;
