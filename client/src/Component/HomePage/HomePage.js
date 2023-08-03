import React from 'react';
import Navbarcomponent from '../Navbarcomponent';
import Profile from '../profile';
import './HomePage.css';
const Homepage = () => {
  return (
    <div>
      <div className="container-fluid">
        <Navbarcomponent />
        <div className="banner">
          <img src="Advertisement.jpg" alt="Advertisement" />
        </div>
        <div className="row">
          <div className="marketing col-sm-5">
            <p>
              การเรียนการสอนของเราเป็นการสอนในรูปแบบพี่สอนน้อง
              เนื่องจากตัวผมเองเคยไม่เก่งวิชาฟิสิกส์และคณิตศาสตร์มาก่อน
              อะไรที่น้องไม่เข้าใจผมเคยผ่านมาก่อน
              ทางเราจะเริ่มสอนน้องๆทุกคนตั้งแต่พื้นฐานและมีการปลูกฝังให้มีหลักคิดและเหตุผลในตัววิชามากขึ้น
              พร้อมทั้งถ่ายทอดเคล็ดลับการแก้ปัญหาโจทย์ที่ไม่เหมือนใครให้น้องๆที่มาเรียนกับเรา
              โดยการเรียนการสอนของเรานั้นมีทั้งรูปแบบ online และ onsite
              เพื่อช่วยน้องๆได้เข้าถึงการเรียนและไม่เาียเวลาเดินทางได้มากขึ้น
            </p>
          </div>
          <div className="col-sm-7">
            <img src="Online.png" alt="Introduce" />
          </div>
        </div>
        <div className="profile">
          <Profile />
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-sm-4">Tel 08057981xx</div>
            <div className="col-sm-4">Facebook: Subsin Boriboon</div>
            <div className="col-sm-4">line:subsin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
