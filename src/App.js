import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CarouselTab from './components/Carousel';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [nav] = useState(["About", "Skills", "Projects", "Contact"]);
  const [currentMobile, setCurrentMobile] = useState(false);
  const [currentNav, setCurrentNav] = useState(nav[0]);
  return (
    <div className={`${currentMobile ? "mobile-nav-active" : ""}`}>
      <Header>
        <Navigation
          nav={nav}
          currentNav={currentNav}
          currentMobile={currentMobile}
          setCurrentNav={setCurrentNav}
          setCurrentMobile={setCurrentMobile}
        />
      </Header>
      <main>
        {!contactSelected ? (
          <>
            <About>
              <CarouselTab></CarouselTab>
            </About>
            <Projects></Projects>
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