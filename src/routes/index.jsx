import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard';
import { Header } from '../features/header';
import { Footer } from '../features/footer';
import Blog from '../features/blog/components/Blog';
import Api from '../features/api/components/Api';

const AppRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/api" element={<Api />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
