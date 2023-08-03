import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './Navbarcomponent';
import './course.css';
const MiddleComponent = () => {
  const [coursemiddle, setcoursemiddle] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/middleCourse`)
      .then((response) => {
        setcoursemiddle(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="card">
        <NavbarComponent />
        <h1 className="head">ระดับชั้นมัธยมปลาย</h1>
        <div className="card-course">
          {coursemiddle.map((course, index) => (
            <div className="card-items" key={index}>
              <img
                src={`http://localhost:5500/public/images/` + course.Img}
                alt="Course"
              ></img>
              <h5>{course.Title}</h5>
              <p className="description">{course.Description}</p>
              <div className="footer">
                <p className="price">Price:{course.Price}</p>
                <p className="btn btn-primary">more </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MiddleComponent;
