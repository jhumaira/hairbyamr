import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './components/assets/logo1.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <button onClick={() => setIsOpen(true)} className="text-3xl">
          &#9776;
        </button>

        <div className="flex items-center gap-3">
          <img src={logo} alt="Hair by AMR logo" className="h-48 w-auto rounded" />
          <h1 className="text-2xl font-bold"></h1>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4 text-lg">
          {['/', '/shop', '/color-chart', '/supplies', '/about', '/faq', '/contact'].map((path, i) => {
            const labels = ['Home', 'Shop', 'Hair Color Chart', 'Supplies', 'About Us', 'FAQ', 'Contact'];
            return (
              <li key={i}>
                <Link to={path} onClick={() => setIsOpen(false)}>
                  {labels[i]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
