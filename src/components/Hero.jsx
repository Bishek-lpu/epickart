import { ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" aria-label="EpicKart — Buy premium tech gadgets online in India">
      <div className="hero-bg-glow" aria-hidden="true"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="pill-badge" aria-label="New arrivals 2026">🔥 New Arrivals 2026 — Over 20 Products</span>
          <h1 className="hero-title">
            Buy <span className="gradient-text">Premium Tech</span> Gadgets &amp; Gear Online in India
          </h1>
          <p className="hero-subtitle">
            Shop noise-cancelling headphones, gaming gear, smartwatches, wireless earbuds, smart home devices
            &amp; more — curated for tech enthusiasts at the best prices.
          </p>

          {/* Trust Signals */}
          <div className="hero-trust-signals" aria-label="Shopping trust signals">
            <span className="trust-badge">
              <Truck size={15} aria-hidden="true" />
              Free Delivery ₹999+
            </span>
            <span className="trust-badge">
              <ShieldCheck size={15} aria-hidden="true" />
              Secure Payments
            </span>
            <span className="trust-badge">
              <Star size={15} aria-hidden="true" />
              4.8★ Rated Store
            </span>
          </div>

          <div className="hero-actions">
            <Link
              to="/#products"
              className="btn btn-primary btn-lg"
              aria-label="Shop all premium tech products at EpicKart"
            >
              Shop Now <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              className="btn btn-secondary btn-lg"
              aria-label="Learn more about EpicKart"
            >
              About Us
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats" aria-label="EpicKart store statistics">
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Curated Products</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Cities Delivered</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container" aria-hidden="true">
          <div className="glass-card hero-image-placeholder">
            <div className="floating-element float-1"></div>
            <div className="floating-element float-2"></div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
              alt="Premium Noise-Cancelling Headphones — Shop at EpicKart"
              className="hero-img"
              width="800"
              height="800"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
