import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { createBlogAction } from '../redux/actions/blogAction';

const BlogCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    title: '',
    date: '',
    content: '',
  });

  console.log(inputValue);
  const date = new Date();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createBlogAction({ ...inputValue, date: date }, navigate));
  }

  return (
    <section id="create-blog" className="create-blog">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Add Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            id="content"
            name="content"
            type="textarea"
            className="create-blog__text-area"
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </section>
  );
};

export default BlogCreate;
