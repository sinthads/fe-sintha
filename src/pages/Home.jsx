import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import CardMenu from '../components/CardMenu';
import { userLogoutAction } from '../redux/actions';
import '../styles/home.css';

const Landing = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  const logout = () => {
    dispatch(userLogoutAction());
  };

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
      <div>
        {isLogin ? (
          <Button color="primary" onClick={logout}>
            Logout
          </Button>
        ) : undefined}
      </div>
    </section>
  );
};

export default Landing;
