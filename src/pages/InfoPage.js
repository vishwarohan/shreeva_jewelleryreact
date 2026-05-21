import React from 'react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../utils/whatsapp';
import './InfoPage.css';

const TEAM = [
  { name: 'Design Team', role: 'Sketches, CAD references, and stone planning' },
  { name: 'Craft Team', role: 'Finishing, setting, polishing, and quality checks' },
  { name: 'Client Care', role: 'Sizing help, order support, and WhatsApp follow-up' },
];

const TESTIMONIALS = [
  { name: 'Priya S.', text: 'Beautiful finish and very helpful updates through WhatsApp. The piece felt exactly like the brief.' },
  { name: 'Rohan M.', text: 'The custom design process was simple. I shared references, got guidance, and the final jewellery looked premium.' },
  { name: 'Aditi K.', text: 'Fast response, clean packaging, and a lovely shine. I would order again for gifting.' },
];

const POLICY_BLOCKS = {
  returns: {
    label: 'Returns & Exchanges',
    title: 'Returns, Exchanges & Order Support',
    intro: 'We want every Shreeva order to feel right. If something arrives damaged, incorrect, or not as discussed, contact us quickly so our team can review it.',
    sections: [
      ['Return Window', 'Raise a request within 7 days of delivery with order details, opening video or photos, and the original packaging.'],
      ['Exchange Eligibility', 'Unused ready-stock items may be eligible for exchange after inspection. Custom, engraved, resized, or made-to-order items are reviewed case by case.'],
      ['How To Request', 'Send your order number, issue details, and images on WhatsApp or email. Our team will confirm the next step before you ship anything back.'],
    ],
  },
  warranty: {
    label: 'Warranty',
    title: 'Warranty Coverage',
    intro: 'Every piece is checked before dispatch. Warranty support covers craftsmanship issues under normal use, based on product type and order details.',
    sections: [
      ['Coverage', 'Manufacturing defects, loose settings reported early, and finishing issues reviewed by our quality team.'],
      ['Duration', 'Warranty duration may vary by product, material, and custom work. The confirmed duration is shared at purchase or quotation stage.'],
      ['Not Covered', 'Damage from impact, bending, chemical exposure, water misuse, loss, theft, or third-party repairs is outside standard coverage.'],
    ],
  },
  terms: {
    label: 'Terms & Conditions',
    title: 'Terms & Conditions',
    intro: 'These terms explain how orders, custom requests, payments, and support are handled on Shreeva Jewels.',
    sections: [
      ['Orders', 'Product availability, prices, and delivery estimates can change before confirmation. Orders are processed after required payment is received.'],
      ['Custom Work', 'Custom design quotes depend on material, stone choice, complexity, and final approval. Deposits may be non-refundable after production starts.'],
      ['Communication', 'WhatsApp, email, and account updates may be used for order support, quote follow-up, and delivery coordination.'],
    ],
  },
  privacy: {
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    intro: 'We collect only the details needed to process orders, provide support, and improve your shopping experience.',
    sections: [
      ['Information We Use', 'Name, phone, email, address, order details, and custom design inputs may be used for fulfilment and support.'],
      ['Data Sharing', 'Details may be shared with delivery, payment, hosting, or support partners only when needed to run the service.'],
      ['Your Control', 'You can contact us to update account details or ask questions about your stored information.'],
    ],
  },
  faq: {
    label: 'FAQs',
    title: 'Frequently Asked Questions',
    intro: 'Quick answers for browsing, custom design, delivery, and WhatsApp enquiries.',
    sections: [
      ['How do I enquire about a product?', 'Open any product page and tap Enquire on WhatsApp. The message includes product details automatically.'],
      ['Can I request a custom design?', 'Yes. Use the Custom Design page to share your brief, inspiration, contact details, and budget range.'],
      ['Do you ship outside Surat?', 'Yes, orders can be shipped across India and selected international locations after confirmation.'],
    ],
  },
};

export function AboutPage() {
  return (
    <InfoShell label="About Shreeva" title="Our Story, Team & Vision">
      <div className="info-split">
        <div>
          <p>
            Shreeva Jewels is built around elegant jewellery, thoughtful custom work, and a simple shopping journey from browsing to WhatsApp enquiry.
          </p>
          <p>
            Our focus is to help customers choose confidently: clear product pages, useful category navigation, responsive support, and custom design guidance when a ready piece is not enough.
          </p>
        </div>
        <div className="vision-card">
          <span>Vision</span>
          <strong>To make premium jewellery feel personal, trustworthy, and easy to order.</strong>
        </div>
      </div>

      <div className="info-grid">
        {TEAM.map(item => (
          <div key={item.name} className="info-card">
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </InfoShell>
  );
}

export function ReviewsPage() {
  return (
    <InfoShell label="Customer Testimonials" title="Reviews">
      <div className="review-grid">
        {TESTIMONIALS.map(review => (
          <article key={review.name} className="review-panel">
            <div className="stars">★★★★★</div>
            <p>"{review.text}"</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </InfoShell>
  );
}

export function PolicyPage({ type }) {
  const data = POLICY_BLOCKS[type] || POLICY_BLOCKS.terms;
  return (
    <InfoShell label={data.label} title={data.title}>
      <p className="info-intro">{data.intro}</p>
      <div className="policy-list">
        {data.sections.map(([title, text]) => (
          <section key={title} className="policy-item">
            <h3>{title}</h3>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </InfoShell>
  );
}

function InfoShell({ label, title, children }) {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="section-label" style={{ justifyContent: 'center' }}>{label}</div>
        <h1 className="section-title" style={{ textAlign: 'center' }}>{title}</h1>
        <div className="info-actions">
          <Link to="/shop" className="btn-primary">Browse Collection</Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Enquiry</a>
        </div>
      </section>
      <section className="info-content container">{children}</section>
    </div>
  );
}
