import React from 'react';
import '../css/signup.css';

function Signup() {
  const onsubmit = (name) => {
    alert('bye' + name);
  };
  return (
    <div id="signupForm">
      <div>
        <label>
          <i className="fa-solid fa-circle-user"></i> Username{' '}
        </label>
        <input type="text" />
      </div>
      <div>
        <label>
          <i className="fa-solid fa-lock"></i> Password{' '}
        </label>
        <input type="password" />
      </div>
      <div>
        <label>
          <i className="fa-solid fa-lock"></i> Retype password
        </label>
        <input type="password" />
      </div>
      <div>
        <button onClick={() => onsubmit('vinith')}>
          <i className="fa-solid fa-right-to-bracket"></i> Signup
        </button>
      </div>
    </div>
  );
}
export default Signup;
