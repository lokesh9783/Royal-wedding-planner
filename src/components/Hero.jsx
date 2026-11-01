import React from 'react';
import { Crown, Sparkles, Calculator, MessageCircle } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Hero = ({ onOpenEnquiry }) => {
  const { brand } = royalWeddingData;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shahi Bandhan Concierge! I am looking to plan a Royal Destination Wedding in Rajasthan. Could you please share your palace venue portfolio and package details?`
    );
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem 6rem 1rem',
        overflow: 'hidden',
        background: `
          linear-gradient(180deg, rgba(18, 11, 14, 0.75) 0%, rgba(18, 11, 14, 0.92) 80%, #120B0E 100%),
          url('https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat
        `,
      }}
    >
      {/* Decorative Royal Arch Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(122, 23, 43, 0.12) 50%, transparent 75%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Regal Pill Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '50px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              color: 'var(--color-gold-light)',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <Crown size={15} color="#D4AF37" />
            Bespoke Rajputana & Mewar Celebrations
          </span>
        </div>

        {/* Grand Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)',
          }}
        >
          Curating Your Royal
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #FFF6D6 0%, #ECC862 50%, #C59B27 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
            }}
          >
            Fairytale in Rajasthan
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
            color: 'var(--color-cream)',
            maxWidth: '780px',
            margin: '0 auto 2.75rem auto',
            lineHeight: 1.65,
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
          }}
        >
          From the glistening lake palaces of Udaipur to the historic sandstone ramparts of Jaipur and Jodhpur,
          we orchestrate breathtaking destination weddings imbued with imperial luxury.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          <button onClick={onOpenEnquiry} className="btn-gold">
            <Sparkles size={18} />
            <span>Request Royal Proposal</span>
          </button>

          <a href="#calculator" className="btn-outline-gold">
            <Calculator size={18} />
            <span>Estimate Wedding Cost</span>
          </a>

          <button
            onClick={handleWhatsApp}
            style={{
              background: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid #25D366',
              color: '#4ADE80',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              padding: '0.85rem 1.75rem',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
            }}
          >
            <MessageCircle size={18} />
            <span>WhatsApp Concierge</span>
          </button>
        </div>

        {/* Royal Statistics Ticker */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            background: 'rgba(30, 19, 24, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-gold-light)',
              }}
            >
              160+
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-cream-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Weddings Curated
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(212, 175, 55, 0.15)' }}>
            <div
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-gold-light)',
              }}
            >
              24+
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-cream-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Heritage Palaces
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(212, 175, 55, 0.15)' }}>
            <div
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-gold-light)',
              }}
            >
              100%
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-cream-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Bespoke Hospitality
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(212, 175, 55, 0.15)' }}>
            <div
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-gold-light)',
              }}
            >
              4.95 ★
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-cream-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Client Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
