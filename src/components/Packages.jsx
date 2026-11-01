import React, { useState } from 'react';
import { Crown, Sparkles, Check } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Packages = ({ onSelectPackage }) => {
  const { packages, eventsTimeline } = royalWeddingData;
  const [activeTab, setActiveTab] = useState('packages'); // 'packages' | 'timeline'

  return (
    <section id="packages" className="section-wrapper" style={{ background: '#120B0E' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Crown size={14} /> Curated Packages & Timelines
          </span>
          <h2 className="section-title">Palace Celebrations & Regal Itineraries</h2>
          <p className="section-subtitle">
            Choose from carefully engineered turnkey destination collections, or view our traditional 5-event
            imperial Rajasthani wedding sequence.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={() => setActiveTab('packages')}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.86rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'var(--transition)',
              background: activeTab === 'packages' ? 'linear-gradient(135deg, #ECC862, #B88B22)' : 'rgba(35, 22, 28, 0.7)',
              color: activeTab === 'packages' ? '#120B0E' : 'var(--color-cream)',
              border: activeTab === 'packages' ? '1px solid #FFE7A3' : '1px solid var(--color-gold-border)',
            }}
          >
            Wedding Collections
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.86rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'var(--transition)',
              background: activeTab === 'timeline' ? 'linear-gradient(135deg, #ECC862, #B88B22)' : 'rgba(35, 22, 28, 0.7)',
              color: activeTab === 'timeline' ? '#120B0E' : 'var(--color-cream)',
              border: activeTab === 'timeline' ? '1px solid #FFE7A3' : '1px solid var(--color-gold-border)',
            }}
          >
            Ceremony Sequence
          </button>
        </div>

        {/* Tab 1: Packages Grid */}
        {activeTab === 'packages' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="royal-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.popular ? '2px solid var(--color-gold-primary)' : '1px solid var(--color-gold-border)',
                  background: pkg.popular ? 'linear-gradient(180deg, rgba(48, 22, 30, 0.95) 0%, rgba(20, 10, 15, 0.98) 100%)' : undefined,
                  boxShadow: pkg.popular ? '0 15px 45px rgba(212, 175, 55, 0.2)' : undefined,
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #ECC862, #A67C1E)',
                      color: '#120B0E',
                      fontWeight: 800,
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-royal)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 1.25rem',
                      borderRadius: '50px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    }}
                  >
                    ★ Most Requested Package
                  </div>
                )}

                <div>
                  <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-royal)',
                        color: 'var(--color-gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: '#FFF' }}>
                    {pkg.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-cream-muted)', marginBottom: '1.5rem' }}>
                    {pkg.idealFor}
                  </p>

                  <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Starting From
                    </span>
                    <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-royal)', fontWeight: 800, color: 'var(--color-gold-light)' }}>
                      {pkg.startingPrice}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                    {pkg.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.87rem', color: 'var(--color-text-body)' }}>
                        <Check size={16} color="#D4AF37" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={pkg.popular ? 'btn-gold' : 'btn-outline-gold'}
                  style={{ width: '100%' }}
                >
                  <Sparkles size={16} />
                  <span>Select {pkg.name.split(' ')[1] || 'Package'}</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Tab 2: Timeline Sequence */
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {eventsTimeline.map((item, idx) => (
              <div
                key={idx}
                className="royal-card"
                style={{
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.75rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(122, 23, 43, 0.4))',
                    border: '1px solid var(--color-gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-gold-light)',
                  }}
                >
                  <Crown size={28} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                      {item.day}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '0.4rem' }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-cream-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
