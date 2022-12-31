import {
    Flex,
    VStack,
    Divider,
    IconButton,
  } from "@chakra-ui/react";
  import React from "react";

  import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
  import { Link } from "react-router-dom";

function NavigationArrow({next,back,sendNext}) {
  return (
    <VStack w={"100%"} alignSelf="center">
    <Divider></Divider>
    <Flex
      px={18}
      w={"full"}
      justifyContent={"space-between"}
      alignItems="center"
    >
         <Link to={back}>

      <IconButton
        _hover={{ opacity: 1, bg: "gray.100" }}
        opacity={0.3}
        isRound
        variant={"ghost"}
        colorScheme={"messenger"}
        icon={<AiOutlineArrowLeft size={30} />}
      ></IconButton>
         </Link>
      <Link to={next}  state={sendNext}>
        <IconButton
          _hover={{ opacity: 1, bg: "gray.100" }}
          opacity={0.3}
          isRound
          variant={"ghost"}
          size="lg"
          colorScheme={"messenger"}
          icon={<AiOutlineArrowRight size={30} />}
        ></IconButton>
      </Link>
    </Flex>
  </VStack>
  )
}

export default NavigationArrow