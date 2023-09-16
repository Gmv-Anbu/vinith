import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (<div>
   <nav>
        <ul>
            <li><a href="./login 2.html"><i className="fa-solid fa-user-secret"></i> login</a></li>
          <li><a href="./signupsolution.html"><i classNme="fa-solid fa-right-to-bracket"></i> signup</a></li>
          <li><a href="./calculator.html"><i className="fa-solid fa-calculator"></i> calculator</a></li>
          <li><a href="./tabel.html"> <i className="fa-solid fa-table"></i> tabel</a></li>
          <li><a href="./employeeid.html"><i className="fa-solid fa-id-card"></i> employee id</a></li>
        </ul>
    </nav>
  </div>);
}

export default Navbar;
