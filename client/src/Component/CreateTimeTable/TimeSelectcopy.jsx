import {
  Flex,
  Heading,
  HStack,
  VStack,
  Button,
  Grid,
  GridItem,
  Text,
  IconButton,
  Tooltip,
  Spacer,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
//import { WeekDays, Periods, Hours, AllTimeSlots } from "./GridData";
import NavigationArrow from "./NavigationArrow";
import { useLocation } from "react-router-dom";
import GridData from "./GridData";
import { useEffect } from "react";
function GridBox({
  data,
  selectButton,
  selctedTimesPeriods,
  setselctedTimesPeriods,
  settimeids,
  timeids,
}) {
  const [Background, setBackground] = useState("");

  return (
    <Tooltip label={data.value} aria-label="A tooltip">
      <GridItem
        h={"60px"}
        onClick={AddorRemoveTime}
        rowSpan={1}
        colSpan={1}
        bg={Background}
        borderRadius="12"
        border="2px solid gray"
        p="15px 15px"
        borderColor={"gray.200"}
        cursor={data.type === "period" ? "pointer" : "auto"}
      >
        <Flex w={"full"} h="full" alignItems={"center"} justify="center">
          {data.type === "period" ? (
            <IoIosAddCircleOutline
              fontSize={"20px"}
              color={data.isSelected ? "blue" : "red"}
            />
          ) : (
            <Text col textAlign={"center"} fontWeight={600} fontSize={"14px"}>
              {data.value}
            </Text>
          )}
        </Flex>
      </GridItem>
    </Tooltip>
  );
}

function TimeSelectcopy({ sem, TableIndex, modWithTeacs, settimeids, timeids,topWindow }) {
  const Periods = GridData.createPeriods(sem);
  const Hours = GridData.createHours();
  const WeekDays = GridData.createWeekDays();
  const [selctedTimesPeriods, setselctedTimesPeriods] = useState(
    Periods.filter((item) => {
      return item.type === "period";
    })
  );
  const [SelectButton, setSelectButton] = useState(false);

  function SeleceAndDiselect() {
    if (SelectButton) {
      return setSelectButton(false);
    } else {
      return setSelectButton(true);
    }
  }

  return (
    <Flex
      w={"100%"}
      pos="absolute"
      top={0}
      left={0}
      zIndex={TableIndex===sem?10:0}
      visibility={TableIndex===sem?"visible":"hidden"}
    >
      <Flex
        p="15px"
        pb={"5px"}
        h="620px"
        w={"full"}
        alignItems="center"
        flexDir={"column"}
      >
        <Flex
          alignItems={"center"}
          w="full"
          justifyContent={"space-between"}
          mb={2}
        >
          <Heading as="h3" size="lg">
            Select Time slots for Semester {sem}
          </Heading>
          <Flex
            pos={"relative"}
            p="10px 15px"
            borderWidth="2px"
            borderRadius={12}
          >
            <HStack mr={10}>
              <IconButton
                icon={<AiOutlinePlus />}
                isRound
                size={"xs"}
                variant={"outline"}
                colorScheme="twitter"
                isActive={SelectButton ? true : false}
                onClick={SeleceAndDiselect}
              ></IconButton>
              <Text> Add Time</Text>
            </HStack>

            <HStack>
              <IconButton
                icon={<AiOutlineMinus />}
                isRound
                size={"xs"}
                variant={"outline"}
                colorScheme="red"
                isActive={!SelectButton ? true : false}
                onClick={SeleceAndDiselect}
              ></IconButton>
              <Text> Remove Time</Text>
            </HStack>
          </Flex>
        </Flex>

        <Grid
          w={"full"}
          h="fit-content"
          templateColumns="repeat(6, 1fr)"
          templateRows="repeat(9,1fr)"
          gap={1}
          gridAutoFlow="row"
          mb={20}
        >
          <GridItem />

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
                    sem={sem}
                    key={key}
                    data={GridDate}
                    selectButton={SelectButton}
                    setselctedTimesPeriods={setselctedTimesPeriods}
                    selctedTimesPeriods={selctedTimesPeriods}
                    settimeids={settimeids}
                    timeids={timeids}
                  />
                );
              })}
            </Grid>
          </GridItem>
        </Grid>

        {/* <NavigationArrow next="/CreateTimeTable/TimeView"  back= "/admin/CreateTimeTable/AssignTeachers" />


        <HStack
          spacing={"25px"}
          alignSelf={"flex-end"}
          justifyContent={"space-between"}
        >
          <Button width={100} colorScheme="whatsapp" variant="outline">
            Clear All
          </Button>



          <Button colorScheme="whatsapp" width={100} onClick={GenerateTimeTable}>
            Generate
          </Button>

        </HStack> */}
      </Flex>
    </Flex>
  );
}

export default TimeSelectcopy;
