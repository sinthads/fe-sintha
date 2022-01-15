import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const BlogNav = () => {
  return (
    <div className="header">
      <Nav className="xs-2 header-container">
        <div className="header-title">
          <Link to="/soal-2" className="unstyled-link">
            <h2>Blogs</h2>
          </Link>
        </div>
        <div className="header-nav">
          <NavItem>
            <NavLink
              end={true}
              to="/soal-2"
              className={({ isActive }) =>
                isActive ? 'unstyled-link active' : 'unstyled-link'
              }
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/soal-2/create"
              className={({ isActive }) =>
                isActive ? 'unstyled-link active' : 'unstyled-link'
              }
            >
              Create
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
};

export default BlogNav;
