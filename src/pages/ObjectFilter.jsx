import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';
import datas from '../data/expResponse.json';
import '../styles/object-filter.css';

const ObjectFilter = () => {
  const arrs = datas.data.response.billdetails;

  const unfilteredArr = () => {
    if (arrs) {
      return (
        arrs &&
        arrs.map((arr, index) => {
          return (
            <p key={index}>{`[${index}] => ${arr.body[0].split(' : ')[1]}`}</p>
          );
        })
      );
    } else {
      return <p>No Data</p>;
    }
  };

  const filteredArr = () => {
    if (arrs) {
      const items = arrs.map((arr) => arr.body[0].split(' : ')[1]);
      console.log(items);
      const filtered = items.filter((item) => {
        return item >= 100000;
      });
      return filtered.map((value, index) => {
        return <p>{`[${index}] => ${value}`}</p>;
      });
    } else {
      return <p>No Data</p>;
    }
  };

  return (
    <section id="object-filter" className="page object-filter">
      <Container>
        <Container className="object-filter__title">
          <Link to="/" className="unstyled-link">
            <p>Back</p>
          </Link>
          <h3>Filter by billdetails:</h3>
        </Container>
        <Container className="object-filter__container">
          <Card className="object-filter__card">
            <CardTitle>
              <h5>Data Sebelum Filter:</h5>
            </CardTitle>
            <CardBody>{unfilteredArr()}</CardBody>
          </Card>
          <Card className="object-filter__card">
            <CardTitle>
              <h5>Data Setelah Filter:</h5>
            </CardTitle>
            <CardBody>{filteredArr()}</CardBody>
          </Card>
        </Container>
      </Container>
    </section>
  );
};

export default ObjectFilter;
