import React from 'react';
import heroImage from './assets/hero1.png';

const HeroBanner = () => (
  <section className="relative bg-[#f3ece5] overflow-hidden h-[100dvh] flex flex-col md:flex-row">
    {/* Right-side image */}
    <img
      src={heroImage}
      alt="Styled man"
      className="absolute inset-y-0 right-0 h-full w-auto object-contain md:object-cover object-right z-0"
    />

    {/* Left-side text */}
    <div className="relative z-10 flex-1 px-6 md:px-16 py-12 md:py-0 flex items-center">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
          Premium Hair Systems
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-8">
          Custom Cuts. Bold Confidence. Real Results.
        </p>
        <a
          href="/shop"
          className="inline-block bg-[#cc5c2f] text-white text-lg md:text-xl px-6 md:px-8 py-4 rounded hover:bg-[#b34f28] transition"
        >
          Shop Units
        </a>
      </div>
    </div>
  </section>
);

export default HeroBanner;
