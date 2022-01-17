import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { getBlogsAction } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogsAction());
  }, [dispatch]);

  return (
    <>
      <h4>All Blogs</h4>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Link
              to={{ pathname: `/soal-2/${blog.id}` }}
              className="unstyled-link blog-card__container"
              key={blog.id}
            >
              <Card className="blog-card">
                <h5 className="blog-title">{blog.title}</h5>
                <p>
                  {new Date(blog.date.seconds * 1000).toLocaleDateString(
                    'en-US'
                  )}
                </p>
              </Card>
            </Link>
          );
        })}
    </>
  );
};

export default BlogList;
