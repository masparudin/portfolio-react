import React from 'react';
import About from '../parts/About';
import Blog from '../parts/Blog';
import Clients from '../parts/Clients';
import Contact from '../parts/Contact';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Portfolio from '../parts/Portfolio';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
