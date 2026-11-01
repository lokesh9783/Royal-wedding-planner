import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Services } from './components/Services';
import { BudgetCalculator } from './components/BudgetCalculator';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { EnquiryForm } from './components/EnquiryForm';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';

export function App() {
  const [shortlisted, setShortlisted] = useState(() => {
    try {
      const saved = localStorage.getItem('shahi_bandhan_shortlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  });
  const [prefilledEnquiry, setPrefilledEnquiry] = useState(null);

  const toggleShortlist = (id) => {
    setShortlisted((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('shahi_bandhan_shortlist', JSON.stringify(next));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
      return next;
    });
  };

  const scrollToEnquiry = (prefillData = null) => {
    if (prefillData) {
      setPrefilledEnquiry(prefillData);
    }
    const section = document.getElementById('enquiry');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar
        shortlistCount={shortlisted.length}
        onOpenEnquiry={() => scrollToEnquiry()}
      />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenEnquiry={() => scrollToEnquiry()} />
        
        <Destinations
          onSelectDestination={(cityName) => scrollToEnquiry({ destination: cityName })}
          shortlisted={shortlisted}
          toggleShortlist={toggleShortlist}
        />
        
        <Services onOpenEnquiry={() => scrollToEnquiry()} />
        
        <BudgetCalculator
          onApplyEstimate={(estimateData) => scrollToEnquiry(estimateData)}
        />
        
        <Packages
          onSelectPackage={(pkgName) => scrollToEnquiry({ visionNotes: `Selected Package: ${pkgName}` })}
        />
        
        <Gallery />
        
        <Testimonials />
        
        <EnquiryForm prefilledData={prefilledEnquiry} />
      </main>

      {/* Floating WhatsApp Concierge */}
      <WhatsAppFloating onOpenEnquiry={() => scrollToEnquiry()} />

      {/* Royal Footer */}
      <Footer />
    </div>
  );
}

export default App;
