import React from 'react';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';
import '../css/empdetail.css';
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
      <table id="table1" className="empTable">
        <tr>
          <th>Name</th>
          <td>{emp.Name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{emp.Age}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{emp.Email}</td>
        </tr>
        <tr>
          <th>Date of joining</th>
          <td>{emp.Date}</td>
        </tr>
        <tr>
          <th>Phone number</th>
          <td>{emp.Age}</td>
        </tr>
        <tr>
          <th>Street</th>
          <td>{emp.Street}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{emp.City}</td>
        </tr>
        <tr>
          <th>Region</th>
          <td>{emp.Region}</td>
        </tr>
        <tr>
          <th>Zip</th>
          <td>{emp.Zip}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{emp.Country}</td>
        </tr>
        <tr>
          <th>Info</th>
          <td>{emp.Info}</td>
        </tr>
        <tr>
          <th>EmployeeID</th>
          <td>{emp.EmployeeID}</td>
        </tr>
      </table>
    </div>
  );
}

export default Employeedetails;
