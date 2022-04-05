import React from 'react';
import { ScrollToTop } from '../components/scroll';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';
import About from '../parts/About';
import Blog from '../parts/Blog';
import Clients from '../parts/Clients';
import Contact from '../parts/Contact';
import Experience from '../parts/Experience';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Portfolio from '../parts/Portfolio';

export default function LandingPage() {
  useScrollAnchor();
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Clients />
        <Blog />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
