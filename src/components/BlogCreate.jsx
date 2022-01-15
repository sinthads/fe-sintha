import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const BlogCreate = () => {
  return (
    <section id="create-blog" className="create-blog">
      <Form>
        <FormGroup>
          <Label for="blogTitle">Add Title</Label>
          <Input id="blogTitle" name="blogTitle" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="blogContent">Content</Label>
          <Input
            id="blogContent"
            name="text"
            type="textarea"
            className="create-blog__text-area"
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </section>
  );
};

export default BlogCreate;
