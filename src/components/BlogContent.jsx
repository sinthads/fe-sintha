import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Container,
  Form,
  Input,
} from 'reactstrap';
import { deleteBlogbyIdAction, editBlogAction } from '../redux/actions';

const BlogContent = () => {
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);

  const blog = blogs.find((x) => x.id === id);
  const date = new Date();

  const [inputValue, setInputValue] = useState({
    title: blog.title,
    date: date,
    content: blog.content,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editBlogAction(id, inputValue));
    navigate('/soal-2');
  }

  const handleDeleteButton = () => {
    dispatch(deleteBlogbyIdAction(id));
    navigate('/soal-2');
  };

  return (
    <section id="blog-content" className="blog-content">
      <Card className="blog-content__card">
        <Form onSubmit={handleSubmit}>
          <Container>
            <CardTitle className="centered-text blog-content__title">
              {editing === false ? (
                <Link to="/soal-2">
                  <p className="content-back">Back</p>
                </Link>
              ) : undefined}
              {editing === false ? (
                <h3>{blog.title}</h3>
              ) : (
                <Input
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={blog.title}
                  onChange={handleInputChange}
                />
              )}
            </CardTitle>
          </Container>
          <CardSubtitle className="centered-text">
            {editing === false ? (
              <p>
                {new Date(blog.date.seconds * 1000).toLocaleDateString('en-US')}
              </p>
            ) : undefined}
          </CardSubtitle>
          <CardBody>
            {editing === false ? (
              <p>{blog.content}</p>
            ) : (
              <Input
                id="content"
                name="content"
                type="textarea"
                className="create-blog__text-area"
                defaultValue={blog.content}
                onChange={handleInputChange}
              />
            )}
          </CardBody>
          <Container className="option-btn">
            {editing === false ? (
              <>
                <Button onClick={() => setEditing(!editing)}>Edit Blog</Button>
                <Button color="danger" onClick={handleDeleteButton}>
                  Delete Blog
                </Button>
              </>
            ) : (
              <>
                <Button color="success" onClick={handleSubmit}>
                  Save Edited
                </Button>
                <Button onClick={() => setEditing(!editing)}>Cancel</Button>
              </>
            )}
          </Container>
        </Form>
      </Card>
    </section>
  );
};

export default BlogContent;
