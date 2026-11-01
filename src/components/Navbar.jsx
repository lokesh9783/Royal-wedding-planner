import React, { useState, useEffect } from 'react';
import { Crown, Menu, X, Sparkles, Heart } from 'lucide-react';

export const Navbar = ({ shortlistCount = 0, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Services', href: '#services' },
    { name: 'Cost Estimator', href: '#calculator' },
    { name: 'Packages', href: '#packages' },
    { name: 'Royal Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Top Demo Disclaimer Ribbon */}
      <div className="demo-top-ribbon">
        <span className="badge">Portfolio Demo</span>
        <span>Original Concept Inspired by Rajasthan Destination Wedding Planners • Fictional Business Demo</span>
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.35s ease',
          background: isScrolled
            ? 'rgba(18, 11, 14, 0.94)'
            : 'rgba(18, 11, 14, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(212, 175, 55, 0.25)'
            : '1px solid rgba(212, 175, 55, 0.1)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo & Brand Identity */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ECC862, #9E741A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
                border: '1px solid #FFE7A3',
              }}
            >
              <Crown size={26} color="#160C10" strokeWidth={2.2} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #FFFFFF, #F7E7A9 70%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                SHAHI BANDHAN
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold-light)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                Royal Destination Weddings
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: 'var(--color-cream)',
                  transition: 'color 0.25s ease',
                  padding: '0.4rem 0',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-cream)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Shortlist + Enquire Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
            {shortlistCount > 0 && (
              <a
                href="#enquiry"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '20px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--color-gold-primary)',
                  fontSize: '0.8rem',
                  color: 'var(--color-gold-light)',
                  fontWeight: 600,
                }}
              >
                <Heart size={14} fill="#D4AF37" color="#D4AF37" />
                <span>Shortlist ({shortlistCount})</span>
              </a>
            )}

            <button
              onClick={onOpenEnquiry}
              className="btn-gold"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
            >
              <Sparkles size={15} />
              <span>Plan Wedding</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              border: '1px solid var(--color-gold-border)',
              color: 'var(--color-gold-light)',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(24, 15, 20, 0.98)',
              borderBottom: '1px solid var(--color-gold-border)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                  paddingBottom: '0.75rem',
                  fontFamily: 'var(--font-royal)',
                }}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="btn-gold"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <Sparkles size={16} /> Plan Your Royal Wedding
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
