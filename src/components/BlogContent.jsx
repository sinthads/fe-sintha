import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { deleteBlogbyIdAction } from '../redux/actions';

const BlogContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);

  const blog = blogs.find((x) => x.id === id);

  const handleDeleteButton = () => {
    dispatch(deleteBlogbyIdAction(id));
    navigate('/soal-2');
  };

  return (
    <section id="blog-content" className="blog-content">
      <Card className="blog-content__card">
        <CardTitle className="centered-text blog-content__title">
          <Link to="/soal-2">
            <p className="content-back">Back</p>
          </Link>
          <h3>{blog.title}</h3>
        </CardTitle>
        <CardSubtitle className="centered-text">
          <p>
            {new Date(blog.date.seconds * 1000).toLocaleDateString('en-US')}
          </p>
        </CardSubtitle>
        <CardBody>{blog.content}</CardBody>
      </Card>
      <Button color="danger" onClick={handleDeleteButton}>
        Delete Blog
      </Button>
    </section>
  );
};

export default BlogContent;
