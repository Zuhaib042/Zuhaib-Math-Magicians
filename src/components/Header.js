import React from 'react';

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
              <a href="/">Home</a>
            </li>
            <li className="px-2">
              <a href="/calculator">Calculator</a>
            </li>
            <li className="px-2">
              <a href="/quote">Quote</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
