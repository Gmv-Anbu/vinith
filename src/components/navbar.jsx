import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">
            <i className="fa-solid fa-user-secret"></i> login
          </a>
        </li>
        <li>
          <a href="/signupsolution">
            <i className="fa-solid fa-right-to-bracket"></i> signup
          </a>
        </li>
        <li>
          <a href="/calculator">
            <i className="fa-solid fa-calculator"></i> calculator
          </a>
        </li>
        <li>
          <a href="/pagination">
            <i className="fa-solid fa-calculator"></i> Pagination
          </a>
        </li>
        <li>
          <a href="/dummy">
            <i className="fa-solid fa-calculator"></i> Dummy
          </a>
        </li>
        {/* <li>
          <a href="/tabel">
            {' '}
            <i className="fa-solid fa-table"></i> tabel
          </a>
        </li> */}
        {/* <li>
          <a href="/employeeid">
            <i className="fa-solid fa-id-card"></i> employee id
          </a>
        </li> */}
        <li>
          <a href="/errorpage">
            <i className="fa-solid fa-id-card"></i> errorpage
          </a>
        </li>
        <li>
          <a href="/employeelist">
            <i className="fa-solid fa-id-card"></i> Employeelist
          </a>
        </li>
        <li>
          <a href="/employeedetails">
            <i className="fa-solid fa-id-card"></i> Employeedetails
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
