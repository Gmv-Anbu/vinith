import React from 'react';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';
function Employeedetails() {
  const navigate = useNavigate();
  var emp = {
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
  };

  if (localStorage.getItem('emp')) {
    emp = JSON.parse(localStorage.getItem('emp'));
  }
  const back = () => {
    navigate('/employeelist');
  };
  return (
    <div>
      <div id="empdetail">
        <Card btntext="back" emp={emp} click={back}></Card>
      </div>
      <table id="table1">
        <tr>
          <th>Name</th>
          <td>{emp.Name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{emp.Age}</td>
        </tr>
      </table>
    </div>
  );
}

export default Employeedetails;
