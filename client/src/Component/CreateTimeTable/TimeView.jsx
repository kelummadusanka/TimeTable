import {
  Flex,
  Heading,
  HStack,
  VStack,
  Button,
  Grid,
  GridItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import GridData from "./GridData";
import { Link, useLocation } from "react-router-dom";

function GridBox({ data,diselects }) {

  console.log(diselects)
  return (
    <Tooltip label={data.value} aria-label="A tooltip" w={'full'}>
      <GridItem
        overflow={"hidden"}
        h={"60px"}
        w='175px'
        rowSpan={1}
        colSpan={1}
        bg={diselects.includes(data.id) ? "red.200" : "gray.100"}
        borderRadius="12"
        border="2px solid gray"
        p="5px 5px"
        borderColor={"gray.200"}
        cursor={data.type === "period" ? "pointer" : "auto"}
      >
        <Flex w={"full"} h="full" alignItems={"center"} justify="center">
          {data.Modcode ? (
            <Flex
              w={"full"}
              h="full"
              direction="column"
              justifyContent={"space-between"}
            >
              <Text fontSize="14px" fontWeight={"bold"}>
                {data.Modcode}
              </Text>
              <HStack justifyContent={"space-between"}>
                <Text
                  noOfLines={1}
                  overflow={"hidden"}
                  maxW={"100px"}
                  fontSize="10px"
                  fontWeight={"medium"}
                  color="gray.600"
                >
                  {data.lectrurer}
                </Text>
                <Text fontSize="10px" fontWeight={"bold"} color="gray.600">
                  {data.room}
                </Text>
              </HStack>
            </Flex>
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

function TimeView({ sem,diselects }) {
  const [selctedTimesPeriods, setselctedTimesPeriods] = useState([]);
  const Periods=GridData.createPeriods(2)
  const Hours=GridData.createHours()
  const WeekDays=GridData.createWeekDays()
  const AllTimeSlots=GridData.EmptyTimeCell([1,2,3,4,5,6,7,8])
    
  const location = useLocation();
  const Timecells = location.state;

  useEffect(() => {
    axios.get("http://localhost:4000/app/TimeCell/getTimeCell").then((res) => {
      console.log(res)
      res.data.forEach((element) => {
        const objIndex = AllTimeSlots.findIndex((obj) => obj.id == element.id);
        console.log(objIndex)
        AllTimeSlots[objIndex] = {
          ...AllTimeSlots[objIndex],
          lectrurer: element.Lecturer,
          room: element.Roomcode,
          Modcode: element.Modcode,
          ModName: element.ModName,
        };
      });

      setselctedTimesPeriods(
        AllTimeSlots.filter((item) => {
          if (item.semester == sem) {
            return item;
          }
        })
      );
    });
  }, [sem]);

  return (
    <Flex mb={'40'}>

      <VStack alignItems={"baseline"}  w={"full"} h={"full"}>
        <Flex alignItems={"center"} w="full" justifyContent={"space-between"}>
          <Heading as="h3" size="lg">
            Timetable - Semester {sem}
          </Heading>
        </Flex>

        <Grid
          w={"full"}
          h="500px"
          templateColumns="repeat(6, 1fr)"
          templateRows="repeat(9,1fr)"
          gap={1}
          gridAutoFlow="row"
        >
          <GridItem />

          <GridItem colSpan={5} rowSpan={1}>
            <Grid
              gap={1}
              templateColumns="repeat(5, 1fr)"
              templateRows="repeat(1,1fr)"
            >
              {WeekDays.map((WeekDay, key) => {
                return <GridBox key={key} data={{ value: WeekDay }} diselects={diselects}/>;
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
                return <GridBox key={key} data={{ value: Hour }} diselects={diselects}/>;
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
              {selctedTimesPeriods.map((GridDate, key) => {
                return <GridBox key={key} data={GridDate} diselects={diselects} />;
              })}
            </Grid>
          </GridItem>
        </Grid>
      </VStack>

    </Flex>

  );
}

export default TimeView;
