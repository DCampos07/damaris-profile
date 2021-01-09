import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [nav] = useState(["About", "Portfolio", "Resume", "Contact"]);
  const [currentMobile, setCurrentMobile] = useState(false);
  const [currentNav, setCurrentNav] = useState(nav[0]);
  return (
    <div className={`${currentMobile ? "mobile-nav-active" : ""}`}>
      <Header />
      <Nav
        nav={nav}
        currentNav={currentNav}
        currentMobile={currentMobile}
        setCurrentNav={setCurrentNav}
        setCurrentMobile={setCurrentMobile}
      />

      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;