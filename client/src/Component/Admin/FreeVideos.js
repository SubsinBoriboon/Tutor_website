import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from '../Navbarcomponent';

const FreeVideos = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${process.env.REACT_APP_API}/videos`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert('Error happened!');
      });
  };

  return (
    <div className="conteiner-fluid">
      <NavbarComponent />
      <div className="container-sm">
        <div className="List">
          <div>
            {medias.videos?.map((media) => {
              return (
                <div key={media._id}>
                  <video
                    preload="auto"
                    width="1000px"
                    height="800"
                    controls
                    className="col-sm"
                  >
                    <source
                      src={`http://localhost:5500/public/videos/${media.filename}`}
                    />
                  </video>
                  <h1>ชื่อเรื่อง: {media.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeVideos;
