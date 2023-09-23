import React from 'react';
import Card from '../components/card';

function Employeedetails() {
  var emp= {
    Name: 'Ulric',
    Age: 43,
    Email: 'sociis.natoque.penatibus@eleifendCras.com',
    'Date of joining': '27/04/2018',
    'Phone number': '1615062568299',
    Street: 'Ap #122-8677 Magnis Street',
    City: 'Salt Lake City',
    Zip: '546895',
    Region: 'Utah',
    Country: 'Korea, North',
    Info: 'Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,',
    EmployeeID: 200,
  },
  return (
    <div>
      <div id="empdetail">
        <Card btntext="back" emp={emp}></Card>
      </div>
      <table id="table1">
        <tr>
          <th>Name</th>
          <td>sdsxyug</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>yustxbysg</td>
        </tr>
      </table>
    </div>
  );
}

export default Employeedetails;
