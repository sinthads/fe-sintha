import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const SignForm = () => {
  return (
    <Form inline>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{' '}
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

export default SignForm;
