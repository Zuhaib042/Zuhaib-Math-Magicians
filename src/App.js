import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

const App = () => (
  <div className="body">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
