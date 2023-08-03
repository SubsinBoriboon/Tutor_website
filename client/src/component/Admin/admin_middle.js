import { useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../Navbarcomponent';
import { getToken } from '../../service.js/authorize';
const AdminCourses = () => {
  const [Img, setImg] = useState();
  const [state, setState] = useState({
    Title: '',
    Description: '',
    Price: '',
    Time: '',
  });
  const { Title, Description, Price, Time } = state;
  const handleData = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append('Img', Img);
    formdata.append('Title', Title);
    formdata.append('Description', Description);
    formdata.append('Price', Price);
    formdata.append('Time', Time);

    axios
      .post(`${process.env.REACT_APP_API}/middle`, formdata, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => alert('Upload Success!!'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavbarComponent />
      <div
        style={{
          border: '1px solid black',
          borderRadius: '5px',
          padding: '20px',
          margin: '20px',
          width: '50%',
        }}
      >
        <div className="form-group">
          <h2 style={{ fontWeight: 'bold' }}>Upload Course by Admin</h2>
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={Title}
            onChange={handleData('Title')}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            value={Description}
            onChange={handleData('Description')}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="form-control"
            type="text"
            value={Price}
            onChange={handleData('Price')}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            className="form-control"
            type="text"
            value={Time}
            onChange={handleData('Time')}
          />
        </div>
        <div>
          <label>Upload File</label>
          <input
            className="form-control"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminCourses;
