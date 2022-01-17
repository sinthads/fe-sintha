import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BlogContent from './components/BlogContent';
import BlogCreate from './components/BlogCreate';
import BlogList from './components/BlogList';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './pages/Login';
import ObjectFilter from './pages/ObjectFilter';
import Register from './pages/Register';
import { PrivateRoute } from './helper';

function App() {
  const { isLogin } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/soal-1" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/soal-2"
        element={
          <PrivateRoute isLogin={isLogin}>
            <Blogs />
          </PrivateRoute>
        }
      >
        <Route path="/soal-2" element={<BlogList />} />
        <Route path="create" element={<BlogCreate />} />
        <Route path="/soal-2/:id" element={<BlogContent />} />
      </Route>
      <Route
        path="soal-3"
        element={
          <PrivateRoute isLogin={isLogin}>
            <ObjectFilter />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
