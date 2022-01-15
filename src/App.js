import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BlogContent from './components/BlogContent';
import BlogCreate from './components/BlogCreate';
import BlogList from './components/BlogList';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/soal-1" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/soal-2" element={<Blogs />}>
        <Route path="/soal-2" element={<BlogList />} />
        <Route path="create" element={<BlogCreate />} />
        <Route path="/soal-2/:id" element={<BlogContent />} />
      </Route>
    </Routes>
  );
}

export default App;
