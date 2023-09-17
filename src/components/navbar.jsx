import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./login">
            <i className="fa-solid fa-user-secret"></i> login
          </a>
        </li>
        <li>
          <a href="./signupsolution">
            <i classNme="fa-solid fa-right-to-bracket"></i> signup
          </a>
        </li>
        <li>
          <a href="./calculator">
            <i className="fa-solid fa-calculator"></i> calculator
          </a>
        </li>
        <li>
          <a href="./tabel">
            {' '}
            <i className="fa-solid fa-table"></i> tabel
          </a>
        </li>
        <li>
          <a href="./employeeid">
            <i className="fa-solid fa-id-card"></i> employee id
          </a>
        </li>
        <li>
          <a href="./errorpage">
            <i className="fa-solid fa-id-card"></i> errorpage
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
