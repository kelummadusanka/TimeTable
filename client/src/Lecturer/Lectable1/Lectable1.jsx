import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import Data from './data'
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];



const LecDetail = Data.Data.filter(lec => {
  if (lec.Lecturer === "Dr.Thilina Weerasignhe") {
    return lec
  }
});

function Lectable1() {
  console.log(LecDetail)
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th><center>Time</center></Th>
            <Th><center>Module</center></Th>
            <Th><center>Venue</center></Th>
            <Th><center>Batch</center></Th>
          </Tr>
        </Thead>
        <Tbody>
{/* 
          {LecDetail.filter((det) => {
            if (det.day === day)
              return det
          }).map((lecD) => {

            return (

              <Tr>
                <Td><center>{lecD.time.split("")[0] + lecD.time.split("")[1] + ':' + lecD.time.split("")[2] + lecD.time.split("")[3] + '-' + lecD.time.split("")[4] + lecD.time.split("")[5] + ':' + lecD.time.split("")[6] + lecD.time.split("")[7]}</center></Td>
                <Td><center>{lecD.ModName}</center></Td>
                <Td><center>{lecD.Roomcode}</center></Td>
                <Td><center>Semester {lecD.Semester}</center></Td>
              </Tr>
            )
          }


          )} */}





          <Tr>
          <Td><center>8.30am - 9.30am</center></Td>
          <Td><center>{Data.Data[0].ModName}</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>9.30am - 10.30am</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>10.30am - 11.30am</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>11.30am - 12.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>12.30pm - 1.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>1.30pm - 2.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>2.30pm - 3.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>3.30pm - 4.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        </Tbody>

      </Table>
    </TableContainer>
  )
}

export default Lectable1