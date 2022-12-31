import React from 'react';
import './Lecdailysch.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped align='center' class="dst1">
      <thead className='dsth1' align='center'>
        <tr align='center' height='30px'>
          <th width='200px'>Time</th>
          <th width='200px'>Module</th>
          <th width='200px'>Venue</th>
          <th width='200px'>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr align='center' className='dstr1'>
          <td>8.30am - 9.30am</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>9.30am - 10.30am</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>10.30am - 11.30am</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>11.30am -12.30pm</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>12.30pm - 1.30pm</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>1.30pm - 2.30pm</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>2.30pm - 3.30pm</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>3.30pm - 4.30pm</td>
          <td>N/A</td>
          <td>N/A</td>
          <td><p className='dstr3'>N/A</p></td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
