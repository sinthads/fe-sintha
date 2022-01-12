import React from 'react';
import CardMenu from '../components/CardMenu';
import '../styles/home.css';

const Landing = () => {
  const soal = [
    { title: 'Soal 1', slug: 'soal-1' },
    { title: 'Soal 2', slug: 'soal-2' },
    { title: 'Soal 3', slug: 'soal-3' },
  ];

  return (
    <section id="landing-page" className="page home-page">
      <div className="menu-container">
        {soal.map((item) => {
          return (
            <CardMenu title={item.title} key={item.slug} slug={item.slug} />
          );
        })}
      </div>
    </section>
  );
};

export default Landing;
