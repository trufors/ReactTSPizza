import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundBlock';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
