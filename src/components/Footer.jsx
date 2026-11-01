import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Footer = () => {
  const { brand } = royalWeddingData;

  return (
    <footer
      style={{
        background: '#0D0709',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '5rem 0 2rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand & Ethos */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ECC862, #9E741A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Crown size={22} color="#120B0E" />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-royal)', fontSize: '1.3rem', fontWeight: 800, color: '#FFF' }}>
                  SHAHI BANDHAN
                </span>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--color-gold-light)', textTransform: 'uppercase' }}>
                  Royal Celebrations
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-cream-muted)', marginBottom: '1.5rem' }}>
              Architecting luxury destination weddings imbued with Rajputana dignity, imperial hospitality, and timeless romance across Rajasthan's historic palaces.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-light)', fontSize: '0.82rem', fontFamily: 'var(--font-royal)' }}>
              <Sparkles size={14} /> Est. {brand.established} • Jaipur, Rajasthan
            </div>
          </div>

          {/* Heritage Destinations */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Royal Destinations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Jaipur Heritage Palaces', 'Udaipur Lakefront Sanctuaries', 'Jodhpur Desert Fortresses', 'Jaisalmer Sandstone Citadels', 'Samode & Neemrana Havelis'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#destinations"
                    style={{ fontSize: '0.88rem', color: 'var(--color-cream-muted)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-cream-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Planning Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Royal Mandap & Floral Decor', 'Palace Privatisation & Bookings', 'VIP Chauffeur & Guest Hospitality', 'Bespoke Mewari Royal Banquets', 'Vintage Baraat & Sufi Concerts', '4K Cinematic Drone Films'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    style={{ fontSize: '0.88rem', color: 'var(--color-cream-muted)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-cream-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge & Office Details */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Jaipur Palace Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--color-cream-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#D4AF37" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{brand.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                <a href={`tel:${brand.phone}`} style={{ color: '#FFF', fontWeight: 600 }}>{brand.displayPhone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                <span>{brand.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                <span>{brand.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Showcase Project Notice */}
        <div
          style={{
            padding: '1.5rem',
            background: 'rgba(25, 14, 19, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '12px',
            marginBottom: '2.5rem',
            fontSize: '0.8rem',
            color: 'var(--color-cream-muted)',
            lineHeight: '1.6',
            textAlign: 'center',
          }}
        >
          <strong style={{ color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Personal Portfolio Project Showcase • Fictional Demo Business
          </strong>
          Shahi Bandhan is an original, fully responsive React web application developed by Lokesh Kumawat as part of his personal developer portfolio.
          All business identities, packages, sample pricing, reviews, and addresses are fictional demonstration content inspired by Rajasthan destination wedding planning websites.
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © 2026 Shahi Bandhan Royal Weddings. All Rights Reserved.
          </div>
          <div>
            Built with React + Vite by <span style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>Lokesh Kumawat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
