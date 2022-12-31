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
//   import Data from '../Lectable1/data';

// const times = ['08300930','09301030','10301130','11301230']
// const LecDetail = Data.Data.filter(lec => {
//   if (lec.Lecturer === "Dr.Thilina Weerasignhe") {
//     return lec
//   }
// });

function LecWeekly1() {
  return (
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption></TableCaption>
      <Thead>
        <Tr>
          <Th><center>Time</center></Th>
          <Th><center>Monday</center></Th>
          <Th><center>Tuesday</center></Th>
          <Th><center>Wednesday</center></Th>
          <Th><center>Thursday</center></Th>
          <Th><center>Friday</center></Th>
        </Tr>
      </Thead>
      <Tbody>
{/* 
{ times.map(time=>{

  const ThisTime= LecDetail.filter(lec=>{
    if(lec.time===time){
      return lec
    }
  }) ;
 

  const daysofthistime = [new Set(ThisTime.map(item=>item.day))]

  console.log(daysofthistime)
  return(

  <Tr classname='weekrow'  align='center'>
          <Td><center>{time.split("")[0] + time.split("")[1] + ':' + time.split("")[2] + time.split("")[3] + '-' + time.split("")[4] + time.split("")[5] + ':' + time.split("")[6] + time.split("")[7]}</center></Td>
          <Td><center>{daysofthistime.length===1?"ok":"N/A"}</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
  )
}


)} */}






        <Tr classname='weekrow'  align='center'>
          <Td><center>8.30am - 9.30am</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>9.30am - 10.30am</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>10.30am - 11.30am</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>11.30am - 12.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>12.30pm - 1.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>1.30pm - 2.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>2.30pm - 3.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
        <Tr>
          <Td><center>3.30pm - 4.30pm</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
          <Td><center>N/A</center></Td>
        </Tr>
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}

export default LecWeekly1