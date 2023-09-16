import React from 'react';
import './style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Calculator from './pages/Calculator';
import Navbar from './components/navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Signup></Signup>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
