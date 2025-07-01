// src/App.jsx oh no
import React from 'react';
import Navbar from './navbar';
import HeroBanner from './components/HeroBanner';
import AddToCart from './Pages/addToCart'; // Updated import to match your filename
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  BeakerIcon,
  ScissorsIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/solid';

function Home() {
  return (
    <div>
      <HeroBanner />
      <section className="bg-white text-black py-24 px-6 md:px-16 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">
          Get Started With a Hair System
        </h2>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-12">
          Discover the confidence of a custom‑fit, natural‑looking solution tailored just for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { Icon: BeakerIcon, title: '1. Pick Your Hair Color', text: 'Select the shade that best matches your natural hair.' },
            { Icon: ScissorsIcon, title: '2. Get a Template Cut', text: 'Send us your head measurements using our instructions.' },
            { Icon: ShoppingCartIcon, title: '3. Order a Starter Kit', text: 'Receive your unit and start your hair journey!' }
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
              <Icon className="h-16 w-16 text-black fill-current mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 uppercase">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ColorChart() { return <div className="p-6">Hair Color Chart Page</div>; }
function Supplies() { return <div className="p-6">Supply Page</div>; }
function FAQ() { return <div className="p-6">FAQ Page</div>; }
function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="grid grid-cols-1 gap-4 max-w-lg">
        <input className="border p-2" type="text" placeholder="Name" required />
        <input className="border p-2" type="email" placeholder="Email" required />
        <textarea className="border p-2" rows="4" placeholder="Message" required />
        <button type="submit" className="bg-black text-white p-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<AddToCart />} />
        <Route path="/color-chart" element={<ColorChart />} />
        <Route path="/supplies" element={<Supplies />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
