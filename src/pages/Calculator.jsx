import React from 'react';
import '../css/calculator.css';

function Calculator() {
  const display = (key) => {
    alert(key);
  };
  return (
    <div>
      {' '}
      <div className="calculator">
        <input type="text" />
        <div>
          <button onClick={() => display('1')}>1</button>
          <button  onClick={() => display('2')}>2</button>
          <button  onClick={() => display('3')}>3</button>
          <button  onClick={() => display('+')}>+</button>
        </div>
        <div>
          <button  onClick={() => display('4')}>4</button>
          <button  onClick={() => display('5')}>5</button>
          <button  onClick={() => display('6')}>6</button>
          <button  onClick={() => display('-')}>-</button>
        </div>
        <div>
          <button  onClick={() => display('7')}>7</button>
          <button  onClick={() => display('8')}>8</button>
          <button  onClick={() => display('9')}>9</button>
          <button  onClick={() => display('*')}>*</button>
        </div>
        <div>
          <button  onClick={() => display('0')}>0</button>
          <button  onClick={() => display('/')}>/</button>
          <button  onClick={() => display('.')}>.</button>
          <button >C</button>
        </div>
        <div>
          <button>AC</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
