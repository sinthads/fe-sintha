import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';
import SignForm from '../components/SignForm';
import { userLogoutAction } from '../redux/actions';
import '../styles/sign-page.css';

const Login = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  const logout = () => {
    dispatch(userLogoutAction());
  };

  return (
    <>
      {isLogin === false ? (
        <div className="page sign">
          <Card className="sign-container">
            <h3>Log In</h3>
            <p className="sign-text">Please Log In to Continue</p>
            <SignForm action={'login'} />
            <p className="sign-text">
              Don't have account?{' '}
              <span className="link">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </Card>
        </div>
      ) : (
        <div className="centered-component">
          <Button color="primary" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default Login;
