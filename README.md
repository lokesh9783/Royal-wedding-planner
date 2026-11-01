# 👑 Shahi Bandhan — Royal Destination Weddings & Celebrations

> A luxury destination wedding planning web application inspired by premier heritage wedding planners across Rajasthan (Jaipur, Udaipur, Jodhpur, and Jaisalmer). Built as a fully functional, original personal portfolio showcase by **Lokesh Kumawat**.

---

## ✨ Features & Functional Highlights

- **Luxury Rajputana Visual Identity**: Deep royal crimson, antiqued gold filigree, rich ambient glow, and royal typography (Cinzel & Cormorant Garamond).
- **Heritage Destination Venues**: Interactive discovery across 4 premier Rajasthan royal destinations (Jaipur, Udaipur, Jodhpur, and Jaisalmer) with palace highlights, typical budgets, and guest capacities.
- **Shortlist System**: Interactive bookmarking for dream wedding destinations saved persistently in `localStorage`.
- **Comprehensive Royal Services**: 6 bespoke services detailing end-to-end planning, royal décor & lotus mandaps, guest concierge & airport fleet, Mewari imperial dining, vintage car baraats, and 4K aerial cinematography.
- **Interactive Royal Wedding Cost Estimator**:
  - Configurable parameters: Destination, Guest Slider (80 to 800+), Days (2 to 4 Days), Décor Tier, and Upgrades.
  - Algorithmic real-time ballpark calculation broken down into Banquets, Mandap, Stay Baseline, Add-ons, and Concierge fees.
  - One-click transfer to Proposal Request or direct WhatsApp breakdown transmission.
- **Curated Turnkey Packages & Event Sequence**:
  - The Heritage Splendor, The Shahi Durbar, and The Emperor’s Imperial Crown.
  - Traditional 5-event timeline preview from Sundowner Carnival to Shahi Dastarkhwan Reception.
- **Filterable Royal Gallery & Lightbox**:
  - Filter by *All*, *Mandap & Decor*, *Palace Venues*, *Ceremonies*, and *Night Illumination*.
  - Full-screen high-definition image lightbox with location details and captions.
- **Verified Demo Testimonials & FAQs**:
  - Authentic palace stories clearly marked with *[Portfolio Showcase Demo]* badges.
  - Interactive accordion addressing guest logistics, lead times, and culinary preferences.
- **Full Proposal & Booking Dossier Form**:
  - Frontend form validation for couple names, phone, email, date picker, budget ranges, and checkboxes.
  - Generates custom tracking reference code (`SB-XXXXXX`) stored in `localStorage`.
  - Instant one-click WhatsApp pre-filled enquiry generator.
- **Floating WhatsApp Concierge**:
  - Interactive online helper pill and deep-link generation.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Icons**: Lucide React
- **Styling**: Modern Vanilla CSS with CSS custom properties, glassmorphism, and responsive grid/flexbox
- **Persistence**: Browser `localStorage` (Shortlist & Enquiries)
- **Deployment**: Standalone SPA ready for Netlify / Vercel

---

## 🚀 Local Development Setup

To run this website locally on your computer:

```bash
# 1. Navigate to the project folder
cd projects/royal-wedding-planner

# 2. Install dependencies (if running independently)
npm install

# 3. Start local development server
npm run dev
```

The application will start at `http://localhost:5174/`.

---

## 📦 Production Build & Testing

To generate an optimized production bundle:

```bash
npm run build
```

This generates production-ready static assets in the `dist/` directory.

---

## 🌐 Deploy to Netlify / Vercel

### Option A: Netlify Drop / Git
1. Push this directory to your GitHub account as `royal-wedding-planner`.
2. In Netlify, click **Add new site > Import an existing project**.
3. Choose your GitHub repository `royal-wedding-planner`.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy Site**.

### Option B: Vercel
1. Import repository on Vercel dashboard.
2. Framework Preset: **Vite**.
3. Click **Deploy**.

---

## ⚖️ Portfolio & Demo Disclaimer

*This project is an original creative work built strictly for educational and personal portfolio demonstration purposes. All business identities, sample pricing, reviews, and contact addresses are fictional. Inspired by modern Indian destination wedding planning websites.*

