import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, MessageCircle, Check } from 'lucide-react';
import { royalWeddingData } from '../data/weddingData';

const destinationMultipliers = {
  jaipur: 1.0,
  udaipur: 1.25, // Udaipur lakefront premium
  jodhpur: 1.1,
  jaisalmer: 1.05,
};

const decorTierRates = {
  heritage: { label: 'Heritage Elegance', basePerEvent: 450000 },
  signature: { label: 'Signature Royal Palace', basePerEvent: 850000 },
  imperial: { label: 'Imperial Crown Bespoke', basePerEvent: 1400000 },
};

const addonsList = [
  { id: 'baraat', name: 'Vintage Car & Royal Baraat Elephant Procession', cost: 250000 },
  { id: 'cinematography', name: '4K Drone Cinema & Hardcover Heirloom Album', cost: 350000 },
  { id: 'sufi', name: 'Live Sufi Troupe & Celebrity Sangeet DJ', cost: 450000 },
  { id: 'hampers', name: 'Handcrafted Heritage Welcome Room Hampers', cost: 180000 },
];

export const BudgetCalculator = ({ onApplyEstimate }) => {
  const { brand } = royalWeddingData;

  // State
  const [destination, setDestination] = useState('jaipur');
  const [guests, setGuests] = useState(250);
  const [days, setDays] = useState(3);
  const [decorTier, setDecorTier] = useState('signature'); // 'heritage' | 'signature' | 'imperial'
  const [selectedAddons, setSelectedAddons] = useState(['baraat', 'cinematography']);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic Calculation
  const calculation = useMemo(() => {
    const destMult = destinationMultipliers[destination] || 1.0;
    
    // Catering & Banquets per guest per day (Avg 3 royal meals)
    const cateringPerGuestPerDay = 3800;
    const cateringTotal = guests * days * cateringPerGuestPerDay * destMult;

    // Decor & Mandap (Events = days * 1.5 approx)
    const eventCount = Math.max(3, days * 1.5);
    const decorRate = decorTierRates[decorTier].basePerEvent;
    const decorTotal = eventCount * decorRate * destMult;

    // Venue Privatisation & Accommodation coordination baseline
    const venueBaseline = (guests * 11000 * (days - 0.5)) * destMult;

    // Addons
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const match = addonsList.find((a) => a.id === id);
      return sum + (match ? match.cost : 0);
    }, 0);

    // Management & Hospitality Team
    const managementFee = (cateringTotal + decorTotal + venueBaseline) * 0.12;

    const grandTotal = cateringTotal + decorTotal + venueBaseline + addonsTotal + managementFee;

    const inLakhs = (grandTotal / 100000).toFixed(1);
    const inCrores = (grandTotal / 10000000).toFixed(2);

    return {
      grandTotal,
      inLakhs,
      inCrores,
      cateringTotal: (cateringTotal / 100000).toFixed(1),
      decorTotal: (decorTotal / 100000).toFixed(1),
      venueBaseline: (venueBaseline / 100000).toFixed(1),
      addonsTotal: (addonsTotal / 100000).toFixed(1),
      managementFee: (managementFee / 100000).toFixed(1),
    };
  }, [destination, guests, days, decorTier, selectedAddons]);

  const handleWhatsAppShare = () => {
    const cityName = destination.toUpperCase();
    const text = encodeURIComponent(
      `Hello Shahi Bandhan! I calculated a Royal Wedding Estimate on your website:\n` +
      `• Destination: ${cityName}\n` +
      `• Estimated Guests: ${guests}\n` +
      `• Duration: ${days} Days\n` +
      `• Decor Tier: ${decorTierRates[decorTier].label}\n` +
      `• Estimated Ballpark: ₹${calculation.inLakhs} Lakhs (approx ₹${calculation.inCrores} Cr)\n` +
      `Could we schedule a call to review available palace dates and customize this proposal?`
    );
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="section-wrapper" style={{ background: '#160E12' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Calculator size={14} /> Interactive Planning Tool
          </span>
          <h2 className="section-title">Royal Wedding Cost Estimator</h2>
          <p className="section-subtitle">
            Configure your dream wedding parameters and receive an instant, itemized ballpark estimate for
            destination celebrations in Rajasthan.
          </p>
        </div>

        {/* Main Tool Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Controls Column */}
          <div
            className="royal-card"
            style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            {/* 1. Destination */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                1. Select Royal Destination
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
                {[
                  { id: 'jaipur', label: 'Jaipur (Palaces)' },
                  { id: 'udaipur', label: 'Udaipur (Lakes)' },
                  { id: 'jodhpur', label: 'Jodhpur (Forts)' },
                  { id: 'jaisalmer', label: 'Jaisalmer (Dunes)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDestination(item.id)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: destination === item.id ? '1px solid var(--color-gold-primary)' : '1px solid rgba(212, 175, 55, 0.2)',
                      background: destination === item.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(18, 11, 14, 0.6)',
                      color: destination === item.id ? '#FFF' : 'var(--color-cream-muted)',
                      transition: 'var(--transition)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  2. Expected Guests
                </label>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-royal)' }}>
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="800"
                step="20"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--color-gold-primary)',
                  cursor: 'pointer',
                  height: '6px',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                <span>80 (Intimate)</span>
                <span>400 (Grand)</span>
                <span>800+ (Imperial)</span>
              </div>
            </div>

            {/* 3. Duration */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                3. Celebration Duration
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                {[2, 3, 4].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: days === d ? '1px solid var(--color-gold-primary)' : '1px solid rgba(212, 175, 55, 0.2)',
                      background: days === d ? 'rgba(212, 175, 55, 0.2)' : 'rgba(18, 11, 14, 0.6)',
                      color: days === d ? '#FFF' : 'var(--color-cream-muted)',
                    }}
                  >
                    {d} Days / {d - 1} Nights
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Decor Tier */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                4. Royal Décor Scale
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {Object.entries(decorTierRates).map(([key, data]) => (
                  <div
                    key={key}
                    onClick={() => setDecorTier(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: decorTier === key ? '1px solid var(--color-gold-primary)' : '1px solid rgba(212, 175, 55, 0.15)',
                      background: decorTier === key ? 'rgba(212, 175, 55, 0.15)' : 'rgba(18, 11, 14, 0.5)',
                      transition: 'var(--transition)',
                    }}
                  >
                    <span style={{ fontSize: '0.88rem', color: decorTier === key ? '#FFF' : 'var(--color-cream-muted)' }}>
                      {data.label}
                    </span>
                    {decorTier === key && <Check size={16} color="#D4AF37" />}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Add-ons */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                5. Royal Experiences & Upgrades
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.9rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: isChecked ? '1px solid var(--color-gold-primary)' : '1px solid rgba(212, 175, 55, 0.12)',
                        background: isChecked ? 'rgba(122, 23, 43, 0.35)' : 'rgba(18, 11, 14, 0.5)',
                        fontSize: '0.82rem',
                        color: isChecked ? '#FFF' : 'var(--color-cream-muted)',
                      }}
                    >
                      <span>{addon.name}</span>
                      <span style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>+₹{(addon.cost / 100000).toFixed(1)}L</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div
            className="royal-card"
            style={{
              padding: '2.5rem',
              position: 'sticky',
              top: '100px',
              border: '2px solid var(--color-gold-border)',
              background: 'linear-gradient(180deg, rgba(42, 20, 28, 0.95) 0%, rgba(20, 10, 15, 0.98) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={16} color="#D4AF37" />
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-royal)', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-light)' }}>
                Estimated Ballpark Budget
              </span>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  fontFamily: 'var(--font-royal)',
                  fontWeight: 900,
                  color: 'var(--color-gold-light)',
                  lineHeight: 1.1,
                }}
              >
                ₹{calculation.inLakhs} Lakhs
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--color-cream-muted)', marginTop: '0.2rem' }}>
                (Approx. ₹{calculation.inCrores} Crores INR)
              </div>
            </div>

            {/* Itemized Breakdown Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', padding: '1.25rem', background: 'rgba(18, 11, 14, 0.7)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-cream-muted)' }}>Royal Banquets & F&B:</span>
                <span style={{ fontWeight: 600, color: '#FFF' }}>₹{calculation.cateringTotal}L</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-cream-muted)' }}>Palace Décor, Mandap & Lighting:</span>
                <span style={{ fontWeight: 600, color: '#FFF' }}>₹{calculation.decorTotal}L</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-cream-muted)' }}>Venue & Stay Baseline ({days} Days):</span>
                <span style={{ fontWeight: 600, color: '#FFF' }}>₹{calculation.venueBaseline}L</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-cream-muted)' }}>Selected Upgrades & Add-ons:</span>
                <span style={{ fontWeight: 600, color: '#FFF' }}>₹{calculation.addonsTotal}L</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '0.5rem' }}>
                <span style={{ color: 'var(--color-gold-light)' }}>Concierge & Production (12%):</span>
                <span style={{ fontWeight: 600, color: 'var(--color-gold-light)' }}>₹{calculation.managementFee}L</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '2rem' }}>
              *This estimate is an algorithmic ballpark calculation for destination planning purposes.
              Exact quotes vary based on specific palace buyout terms, seasonality, and customized culinary requirements.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                onClick={() =>
                  onApplyEstimate({
                    destination,
                    guests,
                    days,
                    decorTier: decorTierRates[decorTier].label,
                    estimate: `₹${calculation.inLakhs} Lakhs`,
                  })
                }
                className="btn-gold"
                style={{ width: '100%' }}
              >
                <Sparkles size={16} /> Book Proposal With This Estimate
              </button>

              <button
                onClick={handleWhatsAppShare}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '50px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid #25D366',
                  color: '#4ADE80',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
              >
                <MessageCircle size={18} />
                <span>Discuss On WhatsApp Now</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
