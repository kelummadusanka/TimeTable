import { VStack, Image, Text, Spacer, HStack } from "@chakra-ui/react";
import React from "react";

const DepDetail = [
  {
    src: "https://cdn.vectorstock.com/i/1000x1000/99/61/electrical-grid-for-industrial-plants-vector-43659961.webp",
    dep: "Electrical and Information",
  },
  {
    src: "https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?w=900&t=st=1665291609~exp=1665292209~hmac=e8f01fcfb629bd78b705c7fba0235d2aa384de30bc5e8412eebef219f992290c",
    dep: "Civil and Environmental",
  },
  {
    src: "https://media.istockphoto.com/id/931748060/vector/modern-conveyor-for-assembly-of-cars.jpg?s=612x612&w=is&k=20&c=eO8L2LrkNQW5_45-lbiqK_F9TUpAJE1fiMvLanQKRNw=",
    dep: "Mechnaincal and Manufacturing",
  },
];

function DepSlect() {
  return (
    <HStack w={'full'} justifyContent="space-between">

      {DepDetail.map((dep, key) => {
        return (
            <VStack
              borderWidth={2}
              bgGradient="linear(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"
              //bg={"blue.200"}
              overflow={"clip"}
              alignItems={"baseline"}
              w="300px"
              borderRadius={"12px"}
            >
          
              <Image
                w="full"
                objectFit="cover"
                src={dep.src}
                alt={dep.dep}
                h={"120px"}
                mb="-3"
              />
              <VStack p={"10px"} h={"full"} alignItems={"flex-start"} spacing={0}>
                <Text color={"#2D3748"} fontSize="14px" fontWeight="medium">
                  {dep.dep}
                </Text>
                <Text color={"#718096"} fontSize="11px">
                  |Manage {dep.dep} lectures
                </Text>
              </VStack>
              </VStack>
  
          );
        })}
    </HStack>
  );
}


export default DepSlect;


