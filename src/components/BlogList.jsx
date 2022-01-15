import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { blogs } from '../data/blogs';

const BlogList = () => {
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
                <p>{blog.date}</p>
              </Card>
            </Link>
          );
        })}
    </>
  );
};

export default BlogList;
