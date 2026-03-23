import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="pill-badge">New Arrival 2026 🔥</span>
          <h1 className="hero-title">
            Discover <span className="gradient-text">Epic</span> Gear for Your Lifestyle
          </h1>
          <p className="hero-subtitle">
            Experience premium quality, cutting-edge tech, and unmatched style. Shop the exclusive collection now.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">
              Shop Now <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-lg">
              Explore Tech
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          {/* We will add an AI generated or stylish placeholder image here later */}
          <div className="glass-card hero-image-placeholder">
            <div className="floating-element float-1"></div>
            <div className="floating-element float-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" 
              alt="Premium Headphones" 
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
