import { useState, useEffect } from 'react';
import NavbarComponent from './Navbarcomponent';
import axios from 'axios';
import { authenticate, getUsername } from '../service/authorize';
import { useNavigate } from 'react-router';
const LoginComponent = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    Username: '',
    Password: '',
  });
  const { Username, Password } = state;
  const inputlogin = (name) => (event) => {
    setstate({ ...state, [name]: event.target.value });
  };
  const submitlogin = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}/login`, { Username, Password })
      .then((response) => {
        console.log(response.data);
        authenticate(response, navigate('/'));
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  useEffect(() => {
    getUsername();
  });

  return (
    <div className="container-fluid">
      <NavbarComponent />
      {/* {JSON.stringify(state)} */}
      <div
        style={{
          border: '1px solid black',
          borderRadius: '5px',
          padding: '20px',
          margin: '20px',
          width: '50%',
        }}
      >
        <form onSubmit={submitlogin}>
          <h3>Login to system</h3>
          {JSON.stringify(state)}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={Username}
              onChange={inputlogin('Username')}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={inputlogin('Password')}
            />
          </div>
          <br />
          <input
            type="submit"
            value="sign in"
            className="btn btn-primary m-3"
          ></input>
          <a href="/createAccount" className="btn btn-primary m-3">
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
