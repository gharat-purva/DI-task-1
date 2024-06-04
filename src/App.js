import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
