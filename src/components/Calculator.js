import React, { Component } from 'react';
import Result from './Result';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-96 mx-auto divide-x divide-y divide-zinc-400 mt-12 grid grid-cols-4 rounded border border-gray-300">
        <Result />
        <button type="button" className="py-4 bg-[#e0e0e0]">
          AC
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          +/-
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          %
        </button>
        <button type="button" className="py-4 bg-[#f4913e]">
          ÷
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          7
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          8
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          9
        </button>
        <button type="button" className="py-4 bg-[#f4913e]">
          x
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          4
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          5
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          6
        </button>
        <button type="button" className="py-4 bg-[#f4913e]">
          -
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          1
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          2
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          3
        </button>
        <button type="button" className="py-4 bg-[#f4913e]">
          +
        </button>
        <button type="button" className="py-4 col-span-2 bg-[#e0e0e0]">
          0
        </button>
        <button type="button" className="py-4 bg-[#e0e0e0]">
          .
        </button>
        <button type="button" className="py-4 bg-[#f4913e]">
          =
        </button>
      </div>
    );
  }
}
export default Calculator;
