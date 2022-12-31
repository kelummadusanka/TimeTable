import { Flex, Heading, VStack, Image, Box, Divider, IconButton } from "@chakra-ui/react";
import {React,useState} from "react";
import Power_Station from "../../Images/Power_Station.jpg";
import CivilEngineer from "../../Images/civilEngineer.png";
import MechanicalEngineer from "../../Images/MechanicalEngineer.png";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
const greenColor =" linear-gradient(90deg, #4AFEA4 0%, #4AFEA4 6.25%, #49FEA2 12.5%, #48FEA0 18.75%, #46FE9D 25%, #44FE99 31.25%, #42FE94 37.5%, #3FFE8E 43.75%, #3BFE87 50%, #37FE7F 56.25%, #33FE76 62.5%, #2EFE6D 68.75%, #29FF62 75%, #23FF57 81.25%, #1DFF4A 87.5%, #16FF3D 93.75%, #0FFF2F 100%)"
const orangeColor =" linear-gradient(90deg, #FEAE5E 0%, #FEAE5E 6.25%, #FEAE5D 12.5%, #FEAD5C 18.75%, #FEAC5B 25%, #FEAB59 31.25%, #FEAA56 37.5%, #FEA953 43.75%, #FEA750 50%, #FEA54C 56.25%, #FEA348 62.5%, #FEA144 68.75%, #FF9F3F 75%, #FF9C39 81.25%, #FF9933 87.5%, #FF962D 93.75%, #FF9326 100%)"
const BlueColor = "linear-gradient(90deg, #2190FE 0%, #2190FE 6.25%, #218FFE 12.5%, #228FFE 18.75%, #238EFE 25%, #248CFE 31.25%, #258AFE 37.5%, #2688FE 43.75%, #2886FE 50%, #2983FE 56.25%, #2B80FE 62.5%, #2D7DFE 68.75%, #307AFF 75%, #3276FF 81.25%, #3571FF 87.5%, #386DFF 93.75%, #3B68FF 100%)"


const Departments = [
  {
    id: 1,
    name: "Electrical and Inforamtion",
    image: Power_Station,
  },
  {
    id: 2,
    name: "Civil and Environmental",
    image: CivilEngineer,
  },
  {
    id: 3,
    name: "Mechanical and Manufacturing",
    image: MechanicalEngineer,
  },
];

function Depbox({ Department,setchooseDep,chooseDep}) {

const [bordercoulor, setbordercoulor] = useState()
var BorderColor;
switch (Department.id) {

  case 1:
    BorderColor = 'whatsapp.300';
    break;
  case 2:
    BorderColor = 'orange.300';
    break;
  case 3:
    BorderColor = 'messenger.300';
    break;

}
  return (
    <Flex
      onClick={() => {setchooseDep(Department.id)
        setbordercoulor()}}
      pos={"relative"}
      p="15px"
      w={"50%"}
      h="120px"
      cursor={'pointer'}
      borderWidth="2px"
      borderRadius={12}
      justifyContent={"space-between"}
      alignItems="center"
      _hover={{borderColor:BorderColor}}
      borderColor={chooseDep!== Department.id? '':
        Department.id === 1
          ? 'whatsapp.300'
          : Department.id === 2
          ? 'orange.300'
          : 'messenger.300'
        }
    >
      <Box
        pos={"absolute"}
        h={"80%"}
        width="40px"
        bg={
          Department.id === 1
            ?greenColor
            : Department.id === 2
            ? orangeColor
            :BlueColor
          }
        top="10%"
        borderRadius={"12px"}
        left={"-20px"}
      ></Box>
      <Heading
        ml={4}
        noOfLines={3}
        maxW="200px"
        as={"h2"}
        fontSize="2xl"
        fontWeight={"semibold"}
        letterSpacing="wide"
      >
        {Department.name}
      </Heading>

      <Image src={Department.image} h={"full"} />
    </Flex>
  );
}

function SelectDep() {
  const [chooseDep, setchooseDep] = useState()
  return (
    <Flex
      pos={"relative"}
      p="15px"
      pb={'5px'}
      h="full"
      w={"full"}
      borderWidth="2px"
      borderRadius={12}
    >
      <VStack alignItems={"baseline"} p="15px" w={"full"} h={"full"}>
        <Flex w={"full"}>
          <Heading as="h3" size="lg">
            First, let's choose the Department
          </Heading>
        </Flex>
        <VStack w={"full"} h="full" justifyContent={"space-around"}>
          {Departments.map((Department, key) => {
            return <Depbox key={key} Department={Department} setchooseDep={setchooseDep} chooseDep={chooseDep} />;
          })}
        </VStack>
        <VStack w={"100%"} alignSelf='center'>
          <Divider></Divider>
          <Flex px={18} w={'full'} justifyContent={"flex-end"}>
          
          <Link isDisabled={true} to={'/admin/CreateTimeTable/AssignTeachers'} state={chooseDep}>
          <IconButton isDisabled={true}  _hover={{opacity:1,bg:'gray.100'}} opacity={0.3} isRound variant={"ghost"} size='lg' colorScheme={'messenger'}  icon={<AiOutlineArrowRight size={30}/>}></IconButton>
          </Link>
          </Flex>
        </VStack>

      </VStack>
    </Flex>
  );
}

export default SelectDep;
