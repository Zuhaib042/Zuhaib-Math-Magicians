import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center border-b">
          <div className="py-2 ml-4">
            <span className="text-4xl  text-white">Math</span>
            <span className="text-4xl ml-1 tracking-wide text-[#EE4B2B]">
              Magician
            </span>
          </div>
          <ul className="sm:flex mr-4 text-white text-lg">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li className="px-2">
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
