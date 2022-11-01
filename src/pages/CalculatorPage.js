import React from 'react';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

export default function CalculatorPage() {
  return (
    <div>
      <Header />
      <h2>Lets do some Math!</h2>
      <div>
        <Calculator />
      </div>
    </div>
  );
}
