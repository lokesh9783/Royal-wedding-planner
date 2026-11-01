import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronDown, ShieldCheck } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Testimonials = () => {
  const { testimonials, faqs } = royalWeddingData;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="testimonials" className="section-wrapper" style={{ background: '#140D10' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Sparkles size={14} /> Celebrated Couples & Heritage Lore
          </span>
          <h2 className="section-title">Royal Love Stories & Guest Acclaim</h2>
          <p className="section-subtitle">
            Hear reflections from couples whose weddings we have had the honor to orchestrate across Rajasthan’s most iconic palaces.
          </p>
        </div>

        {/* Demo Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="royal-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Demo Portfolio Badge */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--color-gold-light)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <ShieldCheck size={12} /> {t.demoNote}
                  </span>
                </div>

                {/* Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>

                <Quote size={28} color="rgba(212, 175, 55, 0.3)" style={{ marginBottom: '0.75rem' }} />

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    lineHeight: '1.7',
                    color: 'var(--color-cream)',
                    fontStyle: 'italic',
                    marginBottom: '1.75rem',
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.15)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '0.2rem' }}>
                  {t.couple}
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)' }}>
                  {t.venue} • {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Help & Planning Guidance
            </span>
            <h3 style={{ fontSize: '2rem', marginTop: '0.4rem', color: '#FFF' }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="royal-card"
                  style={{
                    overflow: 'hidden',
                    border: isOpen ? '1px solid var(--color-gold-primary)' : '1px solid var(--color-gold-border)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: isOpen ? 'var(--color-gold-light)' : '#FFF',
                      fontFamily: 'var(--font-royal)',
                      fontSize: '1.02rem',
                      fontWeight: 600,
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.75rem 1.5rem 1.75rem', borderTop: '1px solid rgba(212, 175, 55, 0.1)', paddingTop: '1rem' }}>
                      <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--color-cream-muted)' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
