import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import SignForm from '../components/SignForm';
import '../styles/sign-page.css';

const Register = () => {
  return (
    <div className="page sign">
      <Card className="sign-container">
        <h3>Sign up yourself</h3>
        <p className="sign-text">Please fill the form to continue</p>
        <SignForm />
        <p className="sign-text">
          Have an account?{' '}
          <span className="link">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Register;
