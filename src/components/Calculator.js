import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const result = calculate(state, event.target.innerText);
    return setState(result);
  };

  return (
    <div className="w-96 max-w-sm">
      <div className="px-4 divide-x divide-y divide-zinc-400 sm:mt-12 grid grid-cols-4">
        <div className="result col-span-4 py-4 bg-[#858693] text-2xl text-white text-right pr-2">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          %
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#f4913e]"
        >
          ÷
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          8
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#f4913e]"
        >
          x
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          4
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          5
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          6
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#f4913e]"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          1
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          2
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          3
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#f4913e]"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 col-span-2 bg-[#e0e0e0]"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#e0e0e0]"
        >
          .
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-4 bg-[#f4913e]"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
