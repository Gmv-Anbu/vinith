import React from 'react';
import './style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Calculator from './pages/Calculator';
import Navbar from './components/navbar';
import Errorpage from './pages/errorpage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signupsolution" element={<Signup></Signup>}></Route>
        <Route path="calculator" element={<Calculator></Calculator>}></Route>
        <Route path="errorpage" element={<Errorpage></Errorpage>}></Route>
      </Routes>
      {/* <Login></Login>
      <Signup></Signup>
      <Calculator></Calculator> */}
    </div>
  );
}

export default App;
