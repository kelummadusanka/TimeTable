import { Flex, VStack, IconButton } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import TimeView from "./TimeView";

function ViewAllTT() {

  const [diselects, setdiselects] = useState([]);

  const [choosedSem, setchoosedSem] = useState([]);
  var inde = 0;
  // var choosedSem=[]

  useEffect(() => {
    axios.get("http://localhost:4000/app/TimeCell/getTimeCell").then((res) => {
      const choosedSemm = [...new Set(res.data.map((item) => item.Semester))];
      setchoosedSem(choosedSemm);


    });

    axios.get("http://localhost:4000/app/diselect/GetDiselect").then((res) => {

    //console.log(res.data.diselect)
      setdiselects(res.data.diselect);


    });
  }, []);

  const [TableIndex, setTableIndex] = useState(choosedSem[inde]);
  console.log(choosedSem);

  return (
    <VStack
      pos={"relative"}
      p="15px"
      pb={"5px"}
      h="full"
      w={"full"}
      borderWidth="2px"
      borderRadius={12}
      alignItems="center"
    >
      <Flex flexDir={"column"} h={"620px"} overflow={"auto"}>
        {choosedSem.map((sem, key) => {
          return <TimeView key={key} sem={sem} TableIndex={3} semNo={3} diselects={diselects}/>;
        })}
      </Flex>

      <IconButton
        _hover={{ opacity: 1, bg: "gray.100" }}
        opacity={0.3}
        isRound
        variant={"ghost"}
        colorScheme={"messenger"}
        onClick={() => {
          if (inde > 0) {
            inde--;
            console.log(inde);
            setTableIndex(choosedSem[inde]);
            console.log("TableIndex");
            console.log(TableIndex);
          }
        }}
        icon={<BsChevronCompactDown size={30} />}
      ></IconButton>
    </VStack>
  );
}

export default ViewAllTT;
