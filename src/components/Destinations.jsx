import React, { useState } from 'react';
import { MapPin, Users, IndianRupee, Heart, Check, Sparkles, ArrowRight } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Destinations = ({ onSelectDestination, shortlisted, toggleShortlist }) => {
  const { destinations } = royalWeddingData;
  const [activeTab, setActiveTab] = useState(destinations[0].id);

  const currentDestination = destinations.find((d) => d.id === activeTab) || destinations[0];

  return (
    <section id="destinations" className="section-wrapper" style={{ background: '#140D10' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <MapPin size={14} /> Royal Rajasthan Destinations
          </span>
          <h2 className="section-title">Palace Venues & Heritage Havens</h2>
          <p className="section-subtitle">
            Celebrate amidst three centuries of regal Rajputana splendour. Explore premier heritage fortresses,
            lakeside sanctuaries, and desert citadels handpicked for grand destination weddings.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '3rem',
          }}
        >
          {destinations.map((dest) => {
            const isSelected = activeTab === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveTab(dest.id)}
                style={{
                  padding: '0.8rem 1.6rem',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-royal)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  background: isSelected
                    ? 'linear-gradient(135deg, #ECC862, #B88B22)'
                    : 'rgba(35, 22, 28, 0.7)',
                  color: isSelected ? '#120B0E' : 'var(--color-cream)',
                  border: isSelected
                    ? '1px solid #FFE7A3'
                    : '1px solid var(--color-gold-border)',
                  boxShadow: isSelected
                    ? '0 6px 20px rgba(212, 175, 55, 0.35)'
                    : 'none',
                }}
              >
                {dest.city.split('—')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Featured Destination Showcase Card */}
        <div
          className="royal-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            overflow: 'hidden',
            marginBottom: '3rem',
          }}
        >
          {/* Visual Side */}
          <div
            style={{
              position: 'relative',
              minHeight: '380px',
              background: `url(${currentDestination.image}) center/cover no-repeat`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(20, 12, 16, 0.95) 0%, rgba(20, 12, 16, 0.2) 60%)',
              }}
            />
            
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
              <span
                style={{
                  background: 'rgba(122, 23, 43, 0.85)',
                  border: '1px solid var(--color-gold-primary)',
                  color: 'var(--color-gold-light)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-royal)',
                  fontWeight: 600,
                }}
              >
                {currentDestination.featuredTag}
              </span>
            </div>

            <button
              onClick={() => toggleShortlist(currentDestination.id)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(18, 11, 14, 0.8)',
                border: '1px solid var(--color-gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: shortlisted.includes(currentDestination.id) ? '#EF4444' : '#FFF',
                transition: 'var(--transition)',
              }}
              title="Save to Shortlist"
              aria-label="Save to shortlist"
            >
              <Heart
                size={20}
                fill={shortlisted.includes(currentDestination.id) ? '#EF4444' : 'none'}
              />
            </button>

            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '0.25rem' }}>
                {currentDestination.city}
              </h3>
              <p style={{ color: 'var(--color-gold-light)', fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                {currentDestination.badge}
              </p>
            </div>
          </div>

          {/* Details & Inclusions Side */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-cream)', marginBottom: '1.75rem' }}>
                {currentDestination.description}
              </p>

              {/* Metrics Pill Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    padding: '1rem',
                    background: 'rgba(212, 175, 55, 0.06)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-light)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                    <Users size={14} /> Guest Capacity
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--color-cream)', fontSize: '1.05rem' }}>
                    {currentDestination.guestCapacity}
                  </div>
                </div>

                <div
                  style={{
                    padding: '1rem',
                    background: 'rgba(212, 175, 55, 0.06)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-light)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                    <IndianRupee size={14} /> Typical Budget
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--color-cream)', fontSize: '1.05rem' }}>
                    {currentDestination.priceRange}
                  </div>
                </div>
              </div>

              {/* Partnered Palaces List */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '0.92rem', color: 'var(--color-gold-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                  Signature Heritage Venues Available:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
                  {currentDestination.venues.map((venue, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.88rem',
                        color: 'var(--color-text-body)',
                      }}
                    >
                      <Check size={14} color="#D4AF37" />
                      <span>{venue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onSelectDestination(currentDestination.city)}
                className="btn-gold"
                style={{ flex: 1 }}
              >
                <Sparkles size={16} /> Plan In {currentDestination.city.split('—')[0].trim()}
              </button>
              
              <a
                href="#calculator"
                className="btn-outline-gold"
              >
                Cost Breakdown
              </a>
            </div>
          </div>
        </div>

        {/* 4-City Grid Quick View */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {destinations.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="royal-card"
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                border: activeTab === item.id ? '1px solid var(--color-gold-primary)' : '1px solid var(--color-gold-border)',
                background: activeTab === item.id ? 'rgba(45, 25, 34, 0.95)' : 'rgba(25, 16, 21, 0.75)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {item.badge}
                </span>
                <ArrowRight size={16} color="#D4AF37" />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#FFF' }}>
                {item.city.split('—')[0].trim()}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>
                {item.priceRange}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
