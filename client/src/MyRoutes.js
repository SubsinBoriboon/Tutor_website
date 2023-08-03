import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginComponent from './Component/loginComponent';
import CreateAccount from './Component/createAccount';
import MiddleComponent from './Component/middleComponent';
import AdminCourses from './Component/Admin/admin_middle';

import AdminRoute from './adminRoute';
import UploadFreeVideos from './Component/Admin/uploadFreeVideos';
import FreeVideos from './Component/Admin/FreeVideos';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        {/* exact component={} คือเป็นการแสดงผลว่าเราต้องการแสดงผลอะไรออกไปให้ใส่ในปีกกา */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/uploadFreeVideos" element={<UploadFreeVideos />} />
        <Route path="/freeVideos" element={<FreeVideos />} />
        <Route element={<AdminRoute />}>
          <Route path="/middleCourse" element={<MiddleComponent />} />
          <Route path="/adminCourses" element={<AdminCourses />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default MyRoute;
