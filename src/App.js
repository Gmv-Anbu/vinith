import React from 'react';
import './style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Calculator from './pages/Calculator';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signupsolution" element={<Signup></Signup>}></Route>
        <Route path="calculator" element={<Calculator></Calculator>}></Route>
      </Routes>
      {/* <Login></Login>
      <Signup></Signup>
      <Calculator></Calculator> */}
    </div>
  );
}

export default App;
