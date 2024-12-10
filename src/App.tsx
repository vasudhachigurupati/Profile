import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <CaseStudies />
    </div>
  );
}

export default App;