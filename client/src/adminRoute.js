import { getUsername } from './service.js/authorize';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  return getUsername() ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
