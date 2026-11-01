import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

export const EnquiryForm = ({ prefilledData = null, onClose = null }) => {
  const { brand, destinations } = royalWeddingData;

  const [formData, setFormData] = useState({
    coupleNames: '',
    phone: '',
    email: '',
    destination: 'Jaipur — The Pink City',
    weddingDate: '',
    guestCount: '250',
    budgetRange: '₹50 Lakhs – ₹80 Lakhs',
    servicesNeeded: ['Planning & Coordination', 'Royal Decor & Mandap', 'Royal Banquets'],
    visionNotes: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedRef, setSubmittedRef] = useState(null);

  // Sync pre-filled data if supplied from Cost Calculator or Destination buttons
  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        destination: prefilledData.destination || prev.destination,
        guestCount: prefilledData.guests ? String(prefilledData.guests) : prev.guestCount,
        budgetRange: prefilledData.estimate ? `Approx. ${prefilledData.estimate}` : prev.budgetRange,
        visionNotes: prefilledData.decorTier ? `Preferred Décor Tier: ${prefilledData.decorTier}. Duration: ${prefilledData.days || 3} Days.` : prev.visionNotes,
      }));
    }
  }, [prefilledData]);

  const handleServiceToggle = (srv) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(srv);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((item) => item !== srv)
          : [...prev.servicesNeeded, srv],
      };
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.coupleNames.trim()) errs.coupleNames = 'Please provide the couple or family name.';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!formData.weddingDate) errs.weddingDate = 'Please select a tentative wedding date.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const refCode = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
    const enquiryRecord = {
      refCode,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('shahi_bandhan_enquiries') || '[]');
      existing.unshift(enquiryRecord);
      localStorage.setItem('shahi_bandhan_enquiries', JSON.stringify(existing));
    } catch (e) {
      console.warn('Storage unavailable', e);
    }

    setSubmittedRef(refCode);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Shahi Bandhan Concierge!\n` +
      `I am requesting a Royal Wedding Proposal:\n` +
      `• Ref: ${submittedRef || 'New Enquiry'}\n` +
      `• Couple: ${formData.coupleNames}\n` +
      `• Destination: ${formData.destination}\n` +
      `• Tentative Date: ${formData.weddingDate || 'Winter 2026'}\n` +
      `• Guests: ${formData.guestCount}\n` +
      `• Target Budget: ${formData.budgetRange}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Notes: ${formData.visionNotes || 'Looking forward to reviewing palace options.'}`
    );
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="enquiry" className="section-wrapper" style={{ background: '#120B0E' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Sparkles size={14} /> Bespoke Wedding Consultation
          </span>
          <h2 className="section-title">Initiate Your Royal Wedding Proposal</h2>
          <p className="section-subtitle">
            Share your tentative dates, guest expectations, and dream heritage destinations.
            Our Chief Wedding Director will prepare a customized palace feasibility proposal.
          </p>
        </div>

        {submittedRef ? (
          /* Confirmation State */
          <div
            className="royal-card"
            style={{
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              border: '2px solid var(--color-gold-primary)',
              background: 'linear-gradient(180deg, rgba(45, 20, 28, 0.98), rgba(20, 10, 15, 0.98))',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '2px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--color-gold-light)',
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <span
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-royal)',
                color: 'var(--color-gold-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Proposal Dossier Generated • Reference Code: {submittedRef}
            </span>

            <h3 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1rem', color: '#FFF' }}>
              Dhanyavaad, {formData.coupleNames}!
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-cream)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
              Your royal wedding consultation request for <strong style={{ color: 'var(--color-gold-light)' }}>{formData.destination}</strong> has been logged in our portfolio registry.
              Our Senior Palace Concierge will review palace dates and reach out within 24 hours.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <button
                onClick={handleWhatsAppDirect}
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#FFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                }}
              >
                <MessageCircle size={18} />
                <span>Send Copy via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedRef(null);
                  if (onClose) onClose();
                }}
                className="btn-outline-gold"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Form */
          <form
            onSubmit={handleSubmit}
            className="royal-card"
            style={{
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            {/* Row 1: Names & Contact */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Couple or Family Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aarav & Ananya Sharma"
                  value={formData.coupleNames}
                  onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(18, 11, 14, 0.8)',
                    border: errors.coupleNames ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.coupleNames && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.coupleNames}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98290 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(18, 11, 14, 0.8)',
                    border: errors.phone ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.phone && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.phone}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. weddings@sharmafamily.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(18, 11, 14, 0.8)',
                    border: errors.email ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.email && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: Destination & Dates & Guests */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Preferred Destination City *
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#1A0E14',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  {destinations.map((d) => (
                    <option key={d.id} value={d.city}>
                      {d.city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Tentative Wedding Date *
                </label>
                <input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#1A0E14',
                    border: errors.weddingDate ? '1px solid #EF4444' : '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                {errors.weddingDate && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.3rem' }}>{errors.weddingDate}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                  Target Total Budget
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: '#1A0E14',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <option value="₹35 Lakhs – ₹50 Lakhs">₹35 Lakhs – ₹50 Lakhs</option>
                  <option value="₹50 Lakhs – ₹80 Lakhs">₹50 Lakhs – ₹80 Lakhs</option>
                  <option value="₹80 Lakhs – ₹1.5 Crores">₹80 Lakhs – ₹1.5 Crores</option>
                  <option value="₹1.5 Crores – ₹3 Crores+">₹1.5 Crores – ₹3 Crores+</option>
                </select>
              </div>
            </div>

            {/* Services Checkboxes */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 600 }}>
                Services Required:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
                {[
                  'Planning & Coordination',
                  'Royal Decor & Mandap',
                  'Royal Banquets',
                  'Regal Hospitality & Transfers',
                  'Baraat & Live Sufi/DJ',
                  'Cinematography & Albums',
                ].map((serviceName) => {
                  const isChecked = formData.servicesNeeded.includes(serviceName);
                  return (
                    <div
                      key={serviceName}
                      onClick={() => handleServiceToggle(serviceName)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: isChecked ? '1px solid var(--color-gold-primary)' : '1px solid rgba(212, 175, 55, 0.15)',
                        background: isChecked ? 'rgba(212, 175, 55, 0.12)' : 'rgba(18, 11, 14, 0.6)',
                        color: isChecked ? '#FFF' : 'var(--color-cream-muted)',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        style={{ accentColor: 'var(--color-gold-primary)' }}
                      />
                      <span>{serviceName}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vision Notes */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 600 }}>
                Wedding Vision & Specific Requests
              </label>
              <textarea
                rows="3"
                placeholder="Share any preferred venues (e.g., Rambagh Palace, Jagmandir), special rituals, vegetarian menu preferences, or family traditions..."
                value={formData.visionNotes}
                onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'rgba(18, 11, 14, 0.8)',
                  border: '1px solid var(--color-gold-border)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit Action Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                <Clock size={14} />
                <span>Response guarantee within 24 working hours</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn-gold">
                  <Sparkles size={16} /> Submit Formal Proposal Request
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
