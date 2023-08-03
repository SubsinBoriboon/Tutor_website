import NavbarComponent from './Navbarcomponent';
import { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [state, setstate] = useState({
    Username: '',
    Password: '',
    Name: '',
    Surname: '',
    Address: '',
  });
  const { Username, Password, Name, Surname, Address } = state;
  const inputdata = (name) => (event) => {
    console.log(name, '=', event.target.value);
    setstate({ ...state, [name]: event.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/create`, {
        Username,
        Password,
        Name,
        Surname,
        Address,
      })
      .then((response) => {
        setstate({
          ...state,
          Username: '',
          Password: '',
          Name: '',
          Surname: '',
          Address: '',
        });
      })
      .catch((err) => {
        console.log('error', '=', err);
      });
  };
  return (
    <div className="container">
      <NavbarComponent />
      <h3 className="">Login to system</h3>
      {JSON.stringify(state)}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={Username}
            onChange={inputdata('Username')}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={Password}
            onChange={inputdata('Password')}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={inputdata('Name')}
          />
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            className="form-control"
            value={Surname}
            onChange={inputdata('Surname')}
          />
        </div>
        <div className="from-group">
          <label>Adress</label>
          <br />
          <textarea
            type="text"
            className="from-control"
            value={Address}
            onChange={inputdata('Address')}
          ></textarea>
        </div>

        <br />
        <input
          type="submit"
          value="sign in"
          className="btn btn-primary m-3"
        ></input>
      </form>
    </div>
  );
};
export default CreateAccount;
