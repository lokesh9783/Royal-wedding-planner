import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const WhatsAppFloating = () => {
  const { brand } = royalWeddingData;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Shahi Bandhan! I would like to enquire regarding availability & palace venue packages for a Destination Wedding in Rajasthan.`
    );
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
      }}
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div
          className="royal-card"
          style={{
            padding: '1.25rem',
            maxWidth: '280px',
            background: 'rgba(26, 14, 20, 0.98)',
            border: '1px solid var(--color-gold-primary)',
            boxShadow: '0 12px 35px rgba(0,0,0,0.7)',
            position: 'relative',
          }}
        >
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              color: 'var(--color-cream-muted)',
              cursor: 'pointer',
            }}
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Concierge Online
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--color-cream)', marginBottom: '0.85rem', lineHeight: '1.45' }}>
            Planning a Rajasthan destination wedding? Chat directly with our senior wedding advisor on WhatsApp.
          </p>

          <button
            onClick={handleWhatsApp}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              borderRadius: '25px',
              background: '#25D366',
              color: '#FFF',
              fontWeight: 700,
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
            }}
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          style={{
            background: 'rgba(30, 18, 24, 0.9)',
            border: '1px solid var(--color-gold-border)',
            color: 'var(--color-gold-light)',
            padding: '0.55rem 1rem',
            borderRadius: '50px',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            display: 'none',
          }}
          className="help-pill"
        >
          Need Advice?
        </button>

        <button
          onClick={handleWhatsApp}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          title="Chat on WhatsApp"
          aria-label="Open WhatsApp Concierge"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .help-pill { display: block !important; }
        }
      `}</style>
    </div>
  );
};
