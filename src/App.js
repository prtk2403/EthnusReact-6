import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Technicalskills from './components/Technicalskills';
import Clubs from './components/Clubs';

function App() {
  return (
    <div className="App">
      <h3>Created By Pratheek Nistala <a href='https://github.com/prtk2403'>prtk2403</a></h3>
      <Header />
      <About />
      <Education />
      <Technicalskills />
      <Projects />
      <Clubs />
      <Contact />
    </div>
  );
}

export default App;
