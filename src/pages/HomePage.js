import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import ProductCard from '../components/ProductCard';
import logo from '../assets/shreeva-logo.png';
import pearlNecklace from '../assets/home/pearl-flower-necklace.jpg';
import earringLifestyle from '../assets/home/earring-lifestyle.jpg';
import necklaceLifestyle from '../assets/home/necklace-lifestyle.jpg';
import engagementRing from '../assets/home/engagement-ring.jpg';
import './HomePage.css';

const TICKER_ITEMS = [
  'Luxury Jewellery',
  'Premium Craftsmanship',
  'Custom Designs',
  'Elegant Collection',
  'SHREEVA',
  'Surat · Gujarat',
  'Worldwide Shipping',
  'Exclusive Pieces',
  'Since 2018'
];

const CATEGORY_LINKS = [
  { label: 'Engagement Rings', type: 'Ring', note: 'Statement solitaires and celebration pieces', image: engagementRing },
  { label: 'Wedding Bands', type: 'Ring', note: 'Daily-wear bands with premium finish', image: engagementRing },
  { label: 'Earrings', type: 'Earring', note: 'Elegant studs, drops, and occasion styles', image: earringLifestyle },
  { label: 'Bracelets', type: 'Bracelet', note: 'Polished bracelets for gifting and styling', image: pearlNecklace },
  { label: 'Necklaces & Pendants', type: 'Pendant', note: 'Signature neckwear and pendant designs', image: necklaceLifestyle },
];

const REVIEW_SNIPPETS = [
  { name: 'Priya S.', text: 'The finish was beautiful and the WhatsApp updates made the whole order easy.' },
  { name: 'Rohan M.', text: 'Custom design guidance was clear from brief to delivery. Premium experience.' },
  { name: 'Aditi K.', text: 'Lovely shine, clean packaging, and quick support for sizing questions.' },
];

const START_PATHS = [
  {
    title: 'Shop Ready Jewellery',
    text: 'Browse finished rings, earrings, bracelets, pendants, and gift-ready pieces.',
    to: '/shop',
    action: 'View Collection',
  },
  {
    title: 'Create A Custom Piece',
    text: 'Share your brief, inspiration, contact details, and budget range for a personal quote.',
    to: '/custom',
    action: 'Start Custom Design',
  },
];

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // First try featured products
        const res = await api.get('/products?featured=true&limit=4');

        if (res.data.products && res.data.products.length > 0) {
          setFeatured(res.data.products);
        } else {
          // Fallback latest products
          const fallback = await api.get('/products?sort=newest&limit=4');
          setFeatured(fallback.data.products || []);
        }
      } catch {
        try {
          const fallback = await api.get('/products?limit=4');
          setFeatured(fallback.data.products || []);
        } catch {}
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-left fade-in">

          <div className="hero-tag">
            ✨ SHREEVA · Since 2018
          </div>

          <h1>
            SHREE<span className="gold-word">VA</span>
          </h1>

          <p className="hero-sub">
            Elegant luxury jewellery crafted for those who appreciate
            timeless style and premium craftsmanship.
            Exclusive designs. Worldwide shipping.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">
              Shop Collection
            </Link>

            <Link to="/custom" className="btn-ghost">
              Custom Order
            </Link>
          </div>

          <div className="hero-stats">
            {[
              ['40K+', 'Clients'],
              ['7+', 'Years Excellence'],
              ['∞', 'Worldwide Ship']
            ].map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE EDITORIAL */}
        <div className="hero-right">

          <div className="hero-glow" />

          <div className="hero-editorial">
            <img src={pearlNecklace} alt="Pearl floral necklace" className="hero-editorial-main" />
            <div className="hero-editorial-small">
              <img src={earringLifestyle} alt="Silver hoop earring styling" />
              <span>Curated daily luxury</span>
            </div>
            <div className="hero-logo-medallion">
              <img src={logo} alt="Shreeva logo" />
            </div>
          </div>

          {/* Floating Particles */}
          <div className="hero-particles">
            {[...Array(6)].map((_, i) => (
              <span key={i} className={`particle p${i + 1}`}>
                ✦
              </span>
            ))}
          </div>

        </div>

      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">

          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-dot" />
            </span>
          ))}

        </div>
      </div>

      {/* GUIDED START */}
      <section className="section container guided-start">
        <div className="section-label">Start Here</div>
        <h2 className="section-title">Two Simple Ways To Find Your Jewellery</h2>
        <div className="start-path-grid">
          {START_PATHS.map(path => (
            <Link key={path.title} to={path.to} className="start-path-card">
              <div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </div>
              <span>{path.action} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="section container home-categories">
        <div className="section-header">
          <div>
            <div className="section-label">Browse & Enquire</div>
            <h2 className="section-title">Shop By Category</h2>
          </div>
          <Link to="/custom" className="section-link">Custom Design →</Link>
        </div>
        <div className="category-grid">
          {CATEGORY_LINKS.map(category => (
            <Link key={category.label} to={`/shop?type=${category.type}`} className="category-card">
              <img src={category.image} alt={category.label} />
              <div>
                <span>{category.label}</span>
                <p>{category.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section container">

        <div className="section-header">

          <div>
            <div className="section-label">
              Fresh Drops
            </div>

            <h2 className="section-title">
              Shop The Collection
            </h2>
          </div>

          <Link to="/shop" className="section-link">
            View All →
          </Link>

        </div>

        {loading ? (

          <div className="product-grid-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="product-skeleton" />
            ))}
          </div>

        ) : featured.length > 0 ? (

          <div className="product-grid-4">
            {featured.map(p => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>

        ) : (

          <div className="no-products-home">

            <p>No products yet.</p>

            <Link
              to="/admin"
              className="btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Add Products in Admin →
            </Link>

          </div>

        )}

      </section>

      {/* BRAND PILLARS */}
      <div className="brand-pillars">

        {[
          {
            icon: '💎',
            title: 'Premium Quality',
            desc: 'Every piece crafted with premium materials and meticulous attention to detail.'
          },
          {
            icon: '✂️',
            title: 'Custom Design',
            desc: 'From concept to creation — bring your unique vision to life with bespoke design.'
          },
          {
            icon: '🌏',
            title: 'Worldwide Shipping',
            desc: 'We ship globally so everyone can enjoy luxury craftsmanship.'
          }
        ].map(p => (

          <div key={p.title} className="brand-pillar">

            <span className="pillar-icon">
              {p.icon}
            </span>

            <h3 className="pillar-title">
              {p.title}
            </h3>

            <p className="pillar-desc">
              {p.desc}
            </p>

          </div>

        ))}

      </div>

      {/* CUSTOMER REVIEWS */}
      <section className="section container reviews-strip">
        <div className="section-header">
          <div>
            <div className="section-label">Customer Reviews</div>
            <h2 className="section-title">Trusted By Jewellery Buyers</h2>
          </div>
          <Link to="/reviews" className="section-link">Read Reviews →</Link>
        </div>
        <div className="home-review-grid">
          {REVIEW_SNIPPETS.map(review => (
            <article key={review.name} className="home-review-card">
              <div className="home-review-stars">★★★★★</div>
              <p>"{review.text}"</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-strip">

        <div className="about-strip-visual">

          <div className="about-glow" />

          <img src={logo} alt="Shreeva luxury jewellery" className="about-logo-img" />

          <div className="about-tag">
            Est. Surat · 2018
          </div>

        </div>

        <div className="about-strip-content">

          <div className="section-label">
            Our Story
          </div>

          <h2 className="section-title">
            The Luxury.<br />
            The Craft.
          </h2>

          <p>
            <strong>SHREEVA</strong> represents timeless luxury,
            elegant craftsmanship and premium jewellery artistry.
          </p>

          <p>
            We create sophisticated jewellery pieces designed
            for individuals who value elegance, confidence
            and exclusivity.
          </p>

          <blockquote className="about-quote">
            "Elegance designed to shine forever."
          </blockquote>

          <Link
            to="/about"
            className="btn-primary"
            style={{ marginTop: '1.5rem' }}
          >
            Learn More
          </Link>

        </div>

      </section>

      {/* CUSTOM CTA */}
      <section className="custom-cta">

        <div className="custom-cta-inner">
          <div className="custom-cta-image">
            <img src={engagementRing} alt="Engagement ring custom design inspiration" />
          </div>

          <div
            className="section-label"
            style={{ justifyContent: 'center' }}
          >
            Bespoke Service
          </div>

          <h2
            className="section-title"
            style={{
              textAlign: 'center',
              marginBottom: '1rem'
            }}
          >
            Make It Yours
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              maxWidth: 480,
              margin: '0 auto 2rem',
              lineHeight: 1.8
            }}
          >
            Turn your vision into reality.
            Create custom jewellery crafted exclusively for you.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Link to="/custom" className="btn-primary">
              Request Custom Quote
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
