import { Navigate } from 'react-router-dom';

export const reqres_api = 'https://reqres.in/api';

export const PrivateRoute = ({ children, isLogin }) => {
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" />;
};
