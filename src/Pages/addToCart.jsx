// src/Shop.jsx
import React, { useState } from 'react';

const packages = [
  { id: 1, name: 'Invisilace Swiss Lace', price: 299, description: 'Fine Swiss lace base.' },
  { id: 2, name: 'Super Fine French Lace', price: 299, description: 'Delicate French lace base.' },
  { id: 3, name: 'Invisiskin PU Base', price: 299, description: 'Polyurethane base for discreet wear.' },
  { id: 4, name: 'Hybridlace Lace + PU', price: 299, description: 'Best of both worlds lace + PU.' },
  { id: 5, name: 'Starter Kit', price: 49, description: 'Tapes, adhesive remover, shampoo.' },
];

function Shop() {
  const [selectedId, setSelectedId] = useState(null);

  const addToCart = (pkg) => {
    alert(`Added "${pkg.name}" — $${pkg.price} to cart`);
    setSelectedId(pkg.id);
  };

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-8">Choose Your Package</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`border rounded-lg shadow-md p-6 flex flex-col justify-between ${
              selectedId === pkg.id ? 'border-2 border-black' : ''
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-gray-700 mb-4">{pkg.description}</p>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-semibold">${pkg.price}</span>
              <button
                onClick={() => addToCart(pkg)}
                className="block w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-800 transition"
              >
                {selectedId === pkg.id ? 'Selected' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
