import { ShieldCheck, Truck, RotateCcw, Star, Zap, Award } from 'lucide-react';
import './SEOContent.css';

const categories = [
  { name: 'Audio', icon: '🎧', desc: 'Headphones, Earbuds & Microphones', count: 3 },
  { name: 'Gaming', icon: '🎮', desc: 'Mice, Keyboards & VR Headsets', count: 2 },
  { name: 'Wearables', icon: '⌚', desc: 'Smartwatches & Smart Rings', count: 2 },
  { name: 'Smart Home', icon: '🏠', desc: 'Speakers, Lights & Displays', count: 3 },
  { name: 'Computing', icon: '💻', desc: 'Monitors, SSDs & Routers', count: 4 },
  { name: 'Photography', icon: '📸', desc: 'Action Cameras & Accessories', count: 2 },
];

const usps = [
  {
    icon: <Truck size={28} />,
    title: 'Free Delivery',
    desc: 'Free shipping on all orders above ₹999. Express 1-2 day delivery available pan-India.',
  },
  {
    icon: <RotateCcw size={28} />,
    title: '30-Day Returns',
    desc: 'Not satisfied? Return any item within 30 days, no questions asked. Full refund guaranteed.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Secure Payments',
    desc: '256-bit SSL encryption protects every transaction. Pay via UPI, Cards, or Net Banking.',
  },
  {
    icon: <Award size={28} />,
    title: 'Curated Quality',
    desc: 'Every product is handpicked and tested by our experts. Only the best makes the cut.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Best Prices',
    desc: 'Competitive pricing with regular sales and exclusive deals for newsletter subscribers.',
  },
  {
    icon: <Star size={28} />,
    title: '4.8★ Rated Store',
    desc: 'Trusted by 10,000+ happy customers across 500+ cities. Check our verified reviews.',
  },
];

const testimonials = [
  {
    name: 'Arjun Mehta',
    city: 'Bangalore',
    rating: 5,
    text: 'Ordered the Aura noise-cancelling headphones and they\'re absolutely phenomenal. Delivery was super fast too — arrived in 2 days!',
    product: 'Aura Headphones',
  },
  {
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    text: 'Best online gadget store I\'ve used. The product quality is top-notch and customer support resolved my query in under an hour.',
    product: 'Nova Smartwatch',
  },
  {
    name: 'Rohan Das',
    city: 'Delhi',
    rating: 5,
    text: 'The Nexus Portable SSD is blazing fast. EpicKart has the best prices I found online, and packaging was premium quality.',
    product: 'Nexus SSD',
  },
];

const SEOContent = () => {
  return (
    <div className="seo-content-wrapper">

      {/* ── Why EpicKart ────────────────────────────────────── */}
      <section className="usp-section" aria-label="Why shop at EpicKart">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose <span className="gradient-text">EpicKart</span>?</h2>
            <p className="section-subtitle">
              India's most trusted online destination for premium tech gadgets &amp; accessories.
              We combine unbeatable prices with an exceptional shopping experience.
            </p>
          </div>
          <div className="usp-grid">
            {usps.map((usp) => (
              <div key={usp.title} className="usp-card glass-card">
                <div className="usp-icon">{usp.icon}</div>
                <h3>{usp.title}</h3>
                <p>{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Category ─────────────────────────────────── */}
      <section className="category-section" aria-label="Shop by product category">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by <span className="gradient-text">Category</span></h2>
            <p className="section-subtitle">
              From gaming peripherals to smart home gadgets — find premium tech across every category.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div key={cat.name} className="category-card glass-card">
                <span className="category-emoji" aria-hidden="true">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <span className="category-count">{cat.count} Products</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="testimonials-section" aria-label="Customer reviews and testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our <span className="gradient-text">Customers</span> Say</h2>
            <p className="section-subtitle">
              Over 10,000 happy shoppers across India trust EpicKart for premium tech gadgets.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial-card glass-card" itemScope itemType="https://schema.org/Review">
                <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote itemProp="reviewBody">
                  <p>"{t.text}"</p>
                </blockquote>
                <footer>
                  <span className="testimonial-name" itemProp="author">{t.name}</span>
                  <span className="testimonial-city"> — {t.city}</span>
                  <span className="testimonial-product">Purchased: {t.product}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Text Block ───────────────────────────────────── */}
      <section className="seo-text-section" aria-label="About EpicKart premium tech store">
        <div className="container">
          <div className="seo-text-content">
            <h2>Buy Premium Tech Gadgets Online at EpicKart</h2>
            <p>
              EpicKart is India's premier online store for <strong>premium tech gadgets</strong>, gaming gear,
              audio accessories, wearables, and smart home devices. Whether you're looking to{' '}
              <strong>buy noise-cancelling headphones</strong>, upgrade to a{' '}
              <strong>mechanical gaming keyboard</strong>, or invest in a{' '}
              <strong>smartwatch that tracks your health</strong> — we have the perfect product waiting for you.
            </p>
            <p>
              Our curated catalog spans over 20+ top-tier products across 9 categories including Audio, Gaming,
              Wearables, Smart Home, Computing, Photography, Accessories, Office, and Outdoors. We handpick every
              single product based on performance, design, and real-world user feedback before it goes live on
              our platform.
            </p>
            <p>
              Shopping at EpicKart means enjoying{' '}
              <strong>free delivery on orders above ₹999</strong>, express 1-2 day shipping, a{' '}
              <strong>30-day hassle-free return policy</strong>, and payment options including UPI,
              credit cards, debit cards, and net banking — all secured by 256-bit SSL encryption.
            </p>
            <p>
              Join thousands of tech enthusiasts across Bangalore, Mumbai, Delhi, Raipur, Hyderabad, Pune,
              and 500+ cities who have already discovered the EpicKart difference.{' '}
              <strong>Shop smarter. Live epic.</strong>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SEOContent;
