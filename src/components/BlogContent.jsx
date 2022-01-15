import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const BlogContent = () => {
  const { id } = useParams();

  return (
    <section id="blog-content" className="blog-content">
      <Card className="blog-content__card">
        <CardTitle className="centered-text blog-content__title">
          <Link to="/soal-2">
            <p className="content-back">Back</p>
          </Link>
          <h3>Blog {id}</h3>
        </CardTitle>
        <CardSubtitle className="centered-text">
          <p>Month, Date Year</p>
        </CardSubtitle>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita,
          alias in cum laudantium facere iusto ducimus aliquam culpa eos a nobis
          officia dolores mollitia nam quos dolore tempora, voluptatibus itaque
          voluptate. Maiores delectus sit ea? Voluptatum hic reiciendis nihil?
        </CardBody>
      </Card>
    </section>
  );
};

export default BlogContent;
