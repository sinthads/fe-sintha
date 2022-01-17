import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { getBlogbyIdAction } from '../redux/actions';

const BlogContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blogDetail } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogbyIdAction(id));
  }, [dispatch, id]);

  return (
    <section id="blog-content" className="blog-content">
      <Card className="blog-content__card">
        <CardTitle className="centered-text blog-content__title">
          <Link to="/soal-2">
            <p className="content-back">Back</p>
          </Link>
          <h3>{blogDetail.title}</h3>
        </CardTitle>
        <CardSubtitle className="centered-text">
          <p>
            {new Date(blogDetail.date.seconds * 1000).toLocaleDateString(
              'en-US'
            )}
          </p>
        </CardSubtitle>
        <CardBody>{blogDetail.content}</CardBody>
      </Card>
    </section>
  );
};

export default BlogContent;
