import React, { useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../Navbarcomponent';
import { getToken } from '../../service.js/authorize';

const UploadFreeVideos = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(videos);
    let formData = new FormData();
    for (let key in videos) {
      console.log(key);
      formData.append('video', videos[key]);
    }
    formData.append('title', title);
    formData.append('description', description);

    console.log(formData);
    axios
      .post(`${process.env.REACT_APP_API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        alert('Success Upload');
      })
      .catch((error) => {
        console.log('Error happend', error);
      });
  };

  return (
    <div className="container-fluid">
      <NavbarComponent />
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card"
            style={{
              height: 'auto',
              width: '70%',
              margin: '40px',
              border: '1px solid black',
            }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontWeight: 'bold' }}>
                  Upload Free Video by Admin
                </h2>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="videos">Upload Videos</label>
                  <input
                    type="file"
                    name="video"
                    id="video"
                    multiple
                    className="form-control"
                    accept=".mp4"
                    onChange={(e) => {
                      setVideos(e.target.files);
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFreeVideos;
