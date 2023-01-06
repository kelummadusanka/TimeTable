import { VStack, IconButton, HStack, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import TimeSelect from "./TimeSelect";
import { useLocation, useNavigate } from "react-router-dom";
import GridData from "./GridData";
import axios from "axios";
import { useEffect } from "react";

function SelectAllTS() {
  const [allLecDet, setallLecDet] = useState([]);
  const [allLRoomDet, setallLRoomDet] = useState([]);
  const [allLModDet, setallLModDet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/app/Lecturer/getlecturer")
      .then((res) => setallLecDet(res.data));

    axios
      .get("http://localhost:4000/app/Rooms/getRoom")
      .then((res) =>
        setallLRoomDet(res.data.sort((a, b) => a.Capacity - b.Capacity))
      );

    axios
      .get("http://localhost:4000/app/Module/getModule")
      .then((res) => setallLModDet(res.data));
  }, []);

  // -----------------------------------------------------------------------------
  const [diselect, setdiselect] = useState([]);
  const location = useLocation();
  const modWithTeacs = location.state;
  const Navigate = useNavigate();
  const toast = useToast();
  let Timecells = [];
  // -----------------------------------------------------------------------------

  var lecsem = []; // filterd object from semester:4, Teacher:{..... } -------> Teacher part only
  var choosedSem = [];
  modWithTeacs.forEach((element) => {
    lecsem = [...lecsem, ...element.Teachers];
    choosedSem = [...choosedSem, parseInt(element.semester)];
  });

  // -----------------------------------show only one time table and shift when button are click
  var inde = 0;
  const [TableIndex, setTableIndex] = useState(0);

  // -----------------------------------TimeSlot ids
  let iniTi = [];

  choosedSem.forEach((element) => {
    const v = GridData.createPeriods(element);

    v.forEach((e) => {
      iniTi = [...iniTi, e.id];
    });
  });

  const [timeids, settimeids] = useState(iniTi);

  //-------We assume One lecturer teach one module for semester. but he can teach other semester also-----------

  const te = [...new Set(lecsem.map((item) => item.teacher))]; // ex:- ["Dr.Chandana Perera","Dr. Chathura Senavirathne"....]
  let i = 1;
  let lecsemIds = []; // ex:- [143,162....]
  let tempLecIds = []; // ex:- [1,2,3....]
  te.forEach((element) => {
    let leci = allLecDet.filter(
      (lecd) =>
        lecd.lastname === element.split(" ")[2] &&
        lecd.firstname === element.split(" ")[1]
    )[0];
    leci = { ...leci, temid: i };
    tempLecIds = [...tempLecIds, leci];

    lecsem.filter((le) => {
      if (le.teacher === element && typeof le.teacher !== "undefined") {
        const pot =
          le.Module.split(" ")[0].split("")[2] +
          le.Module.split(" ")[0].split("")[3];
        le.temLC = parseInt(i + pot);
        lecsemIds = [...lecsemIds, le.temLC];
        return le;
      }
    });

    i++;
  });
  // -----Let generate our core. that is time table generating function-----

  const allocateLecrooms = (timecell) => {
    //allLRoomDet.forEach(room=>)

    choosedSem.forEach((sem) => {
      const thisSemTimeCell = timecell.filter(
        (tc) => parseInt(tc.semester.split(" ")[1]) == sem
      );
      const diferModinSem = [
        ...new Set(thisSemTimeCell.map((item) => item.Module.split(" ")[0])),
      ];
      diferModinSem.forEach((mod) => {
        const modcap = allLModDet.filter((mo) => mo.Modcode === mod)[0]
          .Capacity;

          
          timecell.filter((tc) => {
            
            const suitRoom = allLRoomDet.filter(
             
              (room) => (room.Capacity >= modcap && !room.Reservations.filter(r=>r.DayTime===tc.timeSlots%100).length)
            )[0];


          if (tc.Module.split(" ")[0] === mod) {
            tc.Roomcode = suitRoom.RoomName;

            allLRoomDet.filter((room) => {
              if (room === suitRoom) {
                room.Reservations.push({ semester: sem, DayTime: tc.timeSlots%100 });
              }
            });
          }

          console.log(allLRoomDet);

          console.log(timecell);
        });
      });

      //....................
    });

    return timecell
  };

  const GenerateTimeTable = async () => {
    console.log("i am in");
    let tempLecIdsCopy = tempLecIds;
    let timeidsCopy = timeids;

    //...........................................................

    tempLecIds.forEach((element) => {
      //element----------> {....fristname, lastname},{....}

      let unlikes = element.unlikes;
      let likes = element.likes;
      //......separate lecsemhour code array for choosed lec
      const lecSemCodforL = lecsemIds.filter((e) => {
        //lecSemCodforL----------> [123,142,163]
        const L = Math.floor(e / 100);
        if (L === element.temid) {
          return e;
        }
      });
      //......

      //......Get Available TimeSlot array for choosed lec
      let timeidsforL = [];
      lecSemCodforL.forEach((element) => {
        //lecSemCodforL----------> [123,142,163]
        const LecSem = Math.floor((element / 10) % 10); //takeing 10th place value-----> 2,4,6

        const ThisTS = timeidsCopy.filter((e) => {
          //ThisTS----------> [211,212,213.....]
          const L = Math.floor((e / 100) % 10);
          if (LecSem === L) {
            return e;
          }
        });

        timeidsforL = [...timeidsforL, ...ThisTS].filter(
          (ts) => !unlikes.includes(ts % 100)
        ); //timeidsforL----------> [211,212,213.....411,412,413...611,612...]
      });

      //......

      //........Take one from lecSemCodforL

      lecSemCodforL.forEach((element) => {
        //element----------> 123...

        const LecSem = Math.floor((element / 10) % 10); //takeing 10th place value--->2

        const ThisTSFS = timeidsforL.filter((e) => {
          //Again but this wants. ThisTSFS----------> [211,212,213.....]
          const L = Math.floor((e / 100) % 10);
          if (LecSem === L) {
            return e;
          }
        });

        const hours = Math.floor(element % 10); //takeing 1st place value that is amount of hours--->3
        var arr = [];
        // filted out available likes hours

        // seperate morining lecture hours and evening lecture hours
        const morningEvening = (a, b) => {
          if (a % 10 < 5 && b % 10 > 4) return b - a;
          if (a % 10 > 4 && b % 10 < 5) return a - b;
        };

        //function for consecutive lec hours
        const checkConsecutive = (array) => {
          for (let i = 0; i < array.length - 1; i++) {
            if (array[i] + 1 === array[i + 1]) {
              return [array[i], array[i + 1]];
            }
          }
          return [];
        };

        let resultArr = []; //...........allocated hours for lecture for that semester--->[211,232,233.....]

        //case 1 - check availablity of prferences lec hours

        let LATS = ThisTSFS.filter((ts) => likes.includes(ts % 100)).sort(
          (a, b) => a - b
        );

        let sOp = ThisTSFS.filter((sop) => !LATS.includes(sop)).sort(
          morningEvening
        );

        const rmSelday = (arr1, arr2) => {
          return arr1.filter(
            (el1) =>
              !arr2
                .map((el2) => Math.floor(el2 / 10) % 10)
                .includes(Math.floor((el1 / 10) % 10))
          );
        };

        //case 1.1 - check availablity of 2 consecutive lec hours in likes set

        if (hours > 1) {
          resultArr = checkConsecutive(LATS);

          LATS = rmSelday(LATS, resultArr);
        }

        //case 1.2 - check availablity of 2 consecutive lec hours in second options set

        if (hours > 1 && !resultArr.length) {
          resultArr = checkConsecutive(sOp);
          sOp = rmSelday(sOp, resultArr);
        }
        //case 1.3 - allocate remaining lec hours according to like and availibility
        while (resultArr.length !== hours) {
          if (LATS.length) {
            resultArr.push(LATS[0]);
            LATS = rmSelday(LATS, resultArr);
          } else {
            resultArr.push(sOp[0]);
            sOp = rmSelday(sOp, resultArr);
          }
        }

        timeidsCopy = timeidsCopy.filter((n) => !resultArr.includes(n)); //subtract gotten values from main array
        lecsem.filter((e) => {
          if (e.temLC === element) {
            e.timeSlots = resultArr;
          }
        });

        resultArr.forEach((tt) => {
          //tt-------> 211,....

          timeidsforL = timeidsforL.filter((ti) => {
            //...........preventing the allcating two semesters for same time for lecture
            if (ti % 100 !== tt % 100) return ti;
          });
        });
      });
    });

    lecsem.filter((e) => {
      let temE = e;

      e.timeSlots.forEach((el) => {
        temE.timeSlots = el;
        Timecells = [...Timecells, { ...temE, timeSlots: el }];
      });
    });

    const Timecellwithrooms = allocateLecrooms(Timecells);


    await axios
      .post("http://localhost:4000/app/Diselect/createDiselect", {
        diselect: diselect,
      })
      .then((response) => {});

    await axios
      .post("http://localhost:4000/app/TimeCell/createTimeCell", Timecellwithrooms)
      .then((response) => {})
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

    Navigate("/admin/CreateTimeTable/ViewAllTT", { state: diselect });
  };

  // ----------------------------------------------------------------------------------------------
  function clearAll() {
    axios
      .delete("http://localhost:4000/app/TimeCell/TimeCelldelete", {})
      .then((res) => console.log(res));

    axios
      .delete("http://localhost:4000/app/Diselect/DeleteDiselect", {})
      .then((res) => console.log(res));
  }
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
      <IconButton
        display={TableIndex < choosedSem.length - 1 ? "flex" : "none"}
        _hover={{ opacity: 1, bg: "gray.100" }}
        opacity={0.3}
        isRound
        onClick={() => {
          if (inde < choosedSem.length - 1) {
            inde = TableIndex + 1;
            setTableIndex(inde);
          }
        }}
        variant={"ghost"}
        colorScheme={"messenger"}
        icon={<BsChevronCompactUp size={30} />}
        m={0}
      ></IconButton>
      <VStack
        h={"660px"}
        w={"full"}
        alignItems={"center"}
        overflow="auto"
        pos={"relative"}
      >
        {choosedSem
          .sort((a, b) => a - b)
          .map((sem, index) => {
            return (
              <TimeSelect
                key={index}
                index={index}
                sem={sem}
                TableIndex={TableIndex}
                modWithTeacs={modWithTeacs}
                settimeids={settimeids}
                timeids={timeids}
                setdiselect={setdiselect}
                diselect={diselect}
              />
            );
          })}
      </VStack>

      <HStack
        // spacing={"25px"}
        alignSelf={"flex-end"}
        justifyContent={"space-between"}
        w="full"
        px={8}
      >
        <Button
          //width={100}
          colorScheme="whatsapp"
          variant="outline"
          visibility={"visible"}
          onClick={clearAll}
          mb={2}
        >
          Clear Prvious Data
        </Button>
        <IconButton
          display={TableIndex > 0 ? "flex" : "none"}
          _hover={{ opacity: 1, bg: "gray.100" }}
          opacity={0.3}
          isRound
          variant={"ghost"}
          colorScheme={"messenger"}
          onClick={() => {
            if (TableIndex > 0) {
              inde = TableIndex - 1;
              setTableIndex(inde);
            }
          }}
          icon={<BsChevronCompactDown size={30} />}
        ></IconButton>

        <Button colorScheme="whatsapp" width={100} onClick={GenerateTimeTable}>
          Generate
        </Button>
      </HStack>
    </VStack>
  );
}

export default SelectAllTS;
