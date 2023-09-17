import React from 'react';
import '../css/login.css';

function Login() {
  const onsubmit = (name) => {
    alert('hello' + name);
  };
  return (
    <div id="loginform">
      <div>
        <label>
          <i className="fa-solid fa-right-to-bracket"></i> Username{' '}
        </label>
        <input type="text" className="input" />
      </div>
      <div>
        <label>
          <i className="fa-solid fa-unlock"></i> Password{' '}
        </label>
        <input type="password" className="input" />
      </div>
      <div>
        {/* <button onClick={onsubmit}>login</button> */}
        {/* <button onClick={onsubmit()}>login</button> */}
        <button onClick={() => onsubmit('vinith')}>
          {' '}
          <i className="fa-solid fa-right-to-bracket"></i> login
        </button>
      </div>
    </div>
  );
}

export default Login;
