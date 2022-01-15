import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import SignForm from '../components/SignForm';
import '../styles/sign-page.css';

const Login = () => {
  return (
    <div className="page sign">
      <Card className="sign-container">
        <h3>Log In</h3>
        <p className="sign-text">Please Log In to Continue</p>
        <SignForm />
        <p className="sign-text">
          Don't have account?{' '}
          <span className="link">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Login;
