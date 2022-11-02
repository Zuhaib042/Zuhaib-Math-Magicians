import React from 'react';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

export default function CalculatorPage() {
  return (
    <div>
      <Header />
      <div className="calculatorPage">
        <h2 className="text-4xl text-white font-semibold my-12 px-2 sm:ml-6">
          Lets do some Math!
        </h2>
        <Calculator />
      </div>
    </div>
  );
}
