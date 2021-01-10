import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CarouselTab from './components/Carousel';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import "./App.css"


function App() {
  const [nav] = useState(["About", "Skills", "Projects", "Contact"]);
  const [currentMobile, setCurrentMobile] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(nav[0]);
  return (
    <div className={`${currentMobile ? "mobile-nav-active" : ""}`}>
      <Header />
      <Navigation
        nav={nav}
        currentNavigation={currentNavigation}
        currentMobile={currentMobile}
        setCurrentNavigation={setCurrentNavigation}
        setCurrentMobile={setCurrentMobile}
      />

      <main>
        {currentNavigation === "About" ? (
          <About />
        ) : currentNavigation === "Projects" ? (
          <Projects />
        ) : currentNavigation === "Skills" ? (
          <Skills />
        ) : currentNavigation === "Contact" ? (
          <ContactForm />
        ) : (
          <About />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;