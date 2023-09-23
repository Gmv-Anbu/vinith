import React from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/login">
            <i className="fa-solid fa-user-secret"></i> login
          </a> */}
          <NavLink to="/login">
            <i className="fa-solid fa-user-secret"></i> login
          </NavLink>
        </li>
        <li>
          {/* <a href="/signupsolution">
            <i className="fa-solid fa-right-to-bracket"></i> signup
          </a> */}
          <NavLink to="/signup">
            {' '}
            <i className="fa-solid fa-right-to-bracket"></i> signup
          </NavLink>
        </li>
        <li>
          {/* <a href="/calculator">
            <i className="fa-solid fa-calculator"></i> calculator
          </a> */}
          <NavLink to="/calculator">
            <i className="fa-solid fa-calculator"></i> calculator
          </NavLink>
        </li>
        <li>
          {/* <a href="/pagination">
            <i class="fa-solid fa-table-cells"></i> Pagination
          </a> */}
          <NavLink to="/pagination">
            {' '}
            <i class="fa-solid fa-table-cells"></i> Pagination
          </NavLink>
        </li>
        <li>
          {/* <a href="/dummy">
            <i class="fa-solid fa-d"></i> Dummy
          </a> */}
          <NavLink to="/dummy">
            {' '}
            <i class="fa-solid fa-d"></i> Dummy
          </NavLink>
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
          {/* <a href="/errorpage">
            <i class="fa-solid fa-circle-exclamation"></i> errorpage
          </a> */}
          <NavLink to="/errorpage">
            {' '}
            <i class="fa-solid fa-circle-exclamation"></i> errorpage
          </NavLink>
        </li>
        <li>
          {/* <a href="/employeelist">
            <i class="fa-regular fa-rectangle-list"></i> Employeelist
          </a> */}
          <NavLink to="/employeelist">
            {' '}
            <i class="fa-regular fa-rectangle-list"></i> Employeelist
          </NavLink>
        </li>
        {/* <li>
          <a href="/employeedetails">
            <i className="fa-solid fa-id-card"></i> Employeedetails
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
