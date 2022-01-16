import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { userLoginAction, userRegisterAction } from '../redux/actions';

const SignForm = ({ action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (action === 'register') {
      dispatch(userRegisterAction(inputValue, navigate));
    }
    if (action === 'login') {
      dispatch(userLoginAction(inputValue, navigate));
    }
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          value={inputValue['email']}
          onChange={handleInputChange}
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          value={inputValue['password']}
          onChange={handleInputChange}
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>
      <Button
        color="primary"
        disabled={!inputValue['email'] || !inputValue['password']}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignForm;
