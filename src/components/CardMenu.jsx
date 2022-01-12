import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import '../styles/card-menu.css';

const CardMenu = ({ title, slug }) => {
  return (
    <Link to={slug} className="unstyled-link">
      <Card className="card-menu">
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardMenu;
