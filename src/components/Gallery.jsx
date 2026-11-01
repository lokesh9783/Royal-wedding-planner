import React, { useState } from 'react';
import { Camera, MapPin, X, Eye } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const Gallery = () => {
  const { gallery } = royalWeddingData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Mandap & Decor', 'Palace Venues', 'Ceremonies', 'Night Illumination'];

  const filteredItems = activeCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-wrapper" style={{ background: '#160E12' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Camera size={14} /> Visual Masterpieces
          </span>
          <h2 className="section-title">The Royal Wedding Gallery</h2>
          <p className="section-subtitle">
            Glimpse into authentic palace atmospheres, illuminated courtyards, sacred vows, and intricate floral mandaps
            curated for timeless memories.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '50px',
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'var(--transition)',
                background: activeCategory === cat ? 'linear-gradient(135deg, #ECC862, #B88B22)' : 'rgba(35, 22, 28, 0.6)',
                color: activeCategory === cat ? '#120B0E' : 'var(--color-cream)',
                border: activeCategory === cat ? '1px solid #FFE7A3' : '1px solid var(--color-gold-border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="royal-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
                height: '340px',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(18, 11, 14, 0.95) 0%, rgba(18, 11, 14, 0.2) 65%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-light)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  <MapPin size={12} /> {item.location} • {item.category}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '0.3rem' }}>
                  {item.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <Eye size={14} /> Tap to expand photo
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              background: 'rgba(10, 6, 8, 0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setLightboxImage(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                background: '#1A0F14',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--color-gold-border)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid var(--color-gold-border)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Close image modal"
              >
                <X size={20} />
              </button>

              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover', display: 'block' }}
              />

              <div style={{ padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-light)', fontSize: '0.82rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <MapPin size={14} /> {lightboxImage.location} • {lightboxImage.category}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.5rem' }}>
                  {lightboxImage.title}
                </h3>
                <p style={{ color: 'var(--color-cream-muted)', fontSize: '0.95rem' }}>
                  {lightboxImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
