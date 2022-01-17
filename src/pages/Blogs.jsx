import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogNav from '../components/BlogNav';
import '../styles/blogs.css';

const Blogs = () => {
  return (
    <section id="blogs" className="page blogs">
      <BlogNav />
      <div className="blogs-container">
        <Outlet />
      </div>
    </section>
  );
};

export default Blogs;
