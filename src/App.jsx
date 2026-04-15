import React from 'react';
import CursorGlow from './components/CursorGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StatsStrip from './components/StatsStrip';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Loader />
      <div className="film-grain"></div>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <StatsStrip />
        <Quote />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
