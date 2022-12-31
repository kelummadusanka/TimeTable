import {
  Flex,
  Grid,
  GridItem,
  Text,
  IconButton,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import GridData from "./CreateTimeTable/GridData";
function GridBox({
  data,
  selectButton,
  setunlikes,
  setlikes,
  unlikes,
  likes,
}) {
  const [Background, setBackground] = useState("");
  function AddorRemoveTime() {

    if (selectButton && data.type === "period") {
      setBackground("linear(to top, #4481eb 0%, #04befe 100%)");
      if(!likes.includes(data.id)) setlikes([...likes,data.id])
      if(unlikes.includes(data.id)) setunlikes(()=>unlikes.filter(el=>el!==data.id))
    }
    if (!selectButton && data.type === "period") {
      setBackground("linear(to top, #ff0844 0%, #ffb199 100%)");
      if(!unlikes.includes(data.id)) setunlikes([...unlikes,data.id])
      if(likes.includes(data.id)) setlikes(()=>likes.filter(el=>el!==data.id))
      
    }
  }
  return (
    <Tooltip label={data.value} aria-label="A tooltip">
      <GridItem
      
        h={"20px"}
        w={"50px"}
        onClick={AddorRemoveTime}
        rowSpan={1}
        colSpan={1}
        bgGradient={Background}
        borderRadius="12"
        border="1px solid blue"
        p="5px 5px"
        borderColor={"gray.200"}
        cursor={data.type === "period" ? "pointer" : "auto"}
      >
        <Flex w={"full"} h="full" alignItems={"center"} justify="center">
          {data.type === "period" ? (
            <></>
          ) : (
            <Text color={"white"} col textAlign={"center"} fontWeight={700} fontSize={"8px"} overflowY={"hidden"} noOfLines={1}>
              {data.value}
            </Text>
          )}
        </Flex>
      </GridItem>
    </Tooltip>
  );
}

function PreferencesTable({
  setshowTable,
  showTable,
  setunlikes,
  setlikes,
  setLecturer,
  unlikes,
  likes,
  Lecturer,
}) {
  const Periods = GridData.createPeriods(0);
  const Hours = GridData.createHours();
  const WeekDays = GridData.createWeekDays();
  const [SelectButton, setSelectButton] = useState(false);

  function SeleceAndDiselect() {
    if (SelectButton) {
      return setSelectButton(false);
    } else {
      return setSelectButton(true);
    }
  }

  const createprference = () => {
    setshowTable(false);
    setLecturer({...Lecturer,likes:likes,unlikes:unlikes})
    console.log(Lecturer)
  };

  return (
    <Flex
      pos={"absolute"}
      p="15px"
      pb={"5px"}
      h="fit-content"
      w={"400px"}
      alignItems="center"
      flexDir={"column"}
      bgGradient="linear(-225deg, #6654F1 0%, #EACCF8 75%, #6654F1 100%)"
      borderRadius={12}
      display={showTable ? "flex" : "none"}
      top={510}
      left={1090}
      zIndex={1}
    >
      <Flex
        alignItems={"center"}
        w="full"
        justifyContent={"space-between"}
        mb={2}
      ></Flex>

      <Grid
        w={"full"}
        h="fit-content"
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(9,1fr)"
        gap={1}
        gridAutoFlow="row"
        mb={3}
      >
        <GridItem
          h={"20px"}
          w={"50px"}
          borderRadius="12"
          border="2px solid gray"
          p="2px 2px"
          borderColor={"gray.200"}
          cursor={"pointer"}
          bg='white'
        >
          <Flex w={"full"} h="full" justifyContent={"space-around"}>
            <IconButton
              size={5}
              icon={<AiOutlinePlus size={10} />}
              isRound
              variant={"outline"}
              colorScheme="twitter"
              isActive={SelectButton ? true : false}
              onClick={SeleceAndDiselect}
            ></IconButton>

            <IconButton
              size={5}
              icon={<AiOutlineMinus size={10} />}
              isRound
              variant={"outline"}
              colorScheme="red"
              isActive={!SelectButton ? true : false}
              onClick={SeleceAndDiselect}
            ></IconButton>
          </Flex>
        </GridItem>

        <GridItem colSpan={5} rowSpan={1}>
          <Grid
            gap={1}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(1,1fr)"
          >
            {WeekDays.map((WeekDay, key) => {
              return <GridBox key={key} data={{ value: WeekDay }} />;
            })}
          </Grid>
        </GridItem>

        <GridItem rowSpan={8}>
          <Grid
            gridAutoFlow={"column"}
            templateColumns="repeat(1, 1fr)"
            templateRows="repeat(8,1fr)"
            gap={1}
          >
            {Hours.map((Hour, key) => {
              return <GridBox key={key} data={{ value: Hour }} />;
            })}
          </Grid>
        </GridItem>

        <GridItem rowSpan={8} colSpan={5}>
          <Grid
            gridAutoFlow={"column"}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(8,1fr)"
            gap={1}
          >
            {Periods.map((GridDate, key) => {
              return (
                <GridBox
                  key={key}
                  data={GridDate}
                  selectButton={SelectButton}
                  likes={likes}
                  unlikes={unlikes}
                  setlikes={setlikes}
                  setunlikes={setunlikes}
                />
              );
            })}
          </Grid>
        </GridItem>
      </Grid>

      <Button
        px={3}
        mr={2}
        size={"xs"}
        colorScheme="whatsapp"
        alignSelf={"flex-end"}
        onClick={createprference}
      >
        Add
      </Button>
    </Flex>
  );
}

export default PreferencesTable;
