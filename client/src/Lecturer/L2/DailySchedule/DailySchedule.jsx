import { Box, HStack, Stack, VStack, Flex, color } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import Weekly1 from "../Weekly1/Weekly1.jsx";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Wbutton from '../Wbutton/Wbutton.jsx';

function DailySchedule() {
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
   
   <Weekly1 />
    <Flex mt={4} as="main" w={"full"} justifyContent={"space-between"} gap='20'>
      
    <FormControl>
  <FormLabel>Module Code</FormLabel>
  <Input type='email' />
  <FormHelperText> Code for the module that needs to be rescheduled</FormHelperText>
    </FormControl>  

    <FormControl>
  <FormLabel>Module</FormLabel>
  <Input type='email' />
  <FormHelperText>Module that needs to be rescheduled</FormHelperText>
    </FormControl> 
     
    </Flex>
    

    <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"} gap='20'>
      
    <FormControl>
  <FormLabel>Lecturer's Name</FormLabel>
  <Input type='email' />
  
    </FormControl>

    <FormControl>
  <FormLabel>Time Slot</FormLabel>
  <Input type='email' />
  
    </FormControl>

      </Flex>

     
   

        

        <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"} gap='20'>
      
        <FormControl>
    <FormLabel>Batch</FormLabel>
    <Input type='email' />
    
      </FormControl>

      <FormControl>
    <FormLabel>Venue</FormLabel>
    <Input type='email' />
    
      </FormControl>
  
   
  
        </Flex> 

        <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"} gap='20'>
      
     <Wbutton />
  
        </Flex>
        
  </Flex>
    

    /*<div>
 
      <HStack spacing='24px' >
        <VStack h={'calc(100vh)'} bg={'yellow'} flex={1} bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' >
          <div>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            />
          </div>
        </VStack>
        <VStack h={'calc(100vh)'} flex={4} bg={'blue.600'}></VStack>
      </HStack>
      <HStack height={200} bg={'brown'}>

        </HStack>
     
      </div>*/
  )
}

export default DailySchedule