import React from 'react';
import '../css/login.css';

function Login() {
  return (
    <div>
      {' '}
      <div id="loginform" />
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
        <button>login</button>
      </div>{' '}
    </div>
  );
}

export default Login;
