import React, { useState } from 'react';
import { Crown, Sparkles, Users, UtensilsCrossed, Music, Camera, CheckCircle2, ChevronRight } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Services = ({ onOpenEnquiry }) => {
  const { services } = royalWeddingData;
  const [selectedService, setSelectedService] = useState(services[0].id);

  const iconMap = {
    Crown: Crown,
    Sparkles: Sparkles,
    Users: Users,
    UtensilsCrossed: UtensilsCrossed,
    Music: Music,
    Camera: Camera,
  };

  return (
    <section id="services" className="section-wrapper" style={{ background: '#120B0E' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Crown size={14} /> Comprehensive Royal Curation
          </span>
          <h2 className="section-title">Flawless Rajputana Wedding Services</h2>
          <p className="section-subtitle">
            Every moment curated with meticulous attention to heritage detail. We combine traditional Rajasthani warmth
            with modern 5-star event precision.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Crown;
            const isHovered = selectedService === service.id;

            return (
              <div
                key={service.id}
                className="royal-card"
                onMouseEnter={() => setSelectedService(service.id)}
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isHovered
                    ? '1px solid var(--color-gold-primary)'
                    : '1px solid var(--color-gold-border)',
                }}
              >
                <div>
                  {/* Icon Emblem */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(122, 23, 43, 0.35))',
                      border: '1px solid var(--color-gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: 'var(--color-gold-light)',
                    }}
                  >
                    <IconComponent size={30} />
                  </div>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.85rem', color: '#FFF' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', lineHeight: '1.65', color: 'var(--color-cream-muted)', marginBottom: '1.75rem' }}>
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: 'var(--color-text-body)' }}>
                        <CheckCircle2 size={16} color="#D4AF37" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <button
                    onClick={onOpenEnquiry}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      color: 'var(--color-gold-light)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFF')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-gold-light)')}
                  >
                    <span>Customise this service</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Concierge Callout Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(58, 12, 22, 0.95), rgba(28, 14, 20, 0.95))',
            border: '1px solid var(--color-gold-primary)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>
              Royal Rajasthan Concierge
            </span>
            <h3 style={{ fontSize: '1.65rem', marginTop: '0.35rem', marginBottom: '0.5rem', color: '#FFF' }}>
              Have unique requirements for your family’s traditions?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-cream-muted)', maxWidth: '650px' }}>
              We accommodate custom Marwari, Mewari, Punjabi, and fusion wedding protocols, along with dedicated VIP travel charter arrangements.
            </p>
          </div>

          <button onClick={onOpenEnquiry} className="btn-gold">
            <Sparkles size={16} />
            <span>Consult Chief Wedding Director</span>
          </button>
        </div>

      </div>
    </section>
  );
};

