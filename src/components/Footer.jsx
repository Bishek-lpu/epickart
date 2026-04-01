import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="gradient-text">EpicKart</h2>
            <p className="footer-desc">
              Your ultimate destination for premium tech gear and cutting-edge gadgets. We curate
              only the best — and deliver excellence to your doorstep across India.
            </p>
            <div className="social-links">
              <a href="https://www.twitter.com/epickart" className="social-icon" aria-label="EpicKart on Twitter" target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
              <a href="https://www.instagram.com/epickart" className="social-icon" aria-label="EpicKart on Instagram" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
              <a href="mailto:support@epickart.in" className="social-icon" aria-label="Email EpicKart"><Mail size={20} /></a>
              <a href="https://www.youtube.com/epickart" className="social-icon" aria-label="EpicKart on YouTube" target="_blank" rel="noopener noreferrer"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/">All Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Help Centre</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/refunds">Returns &amp; Refunds</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay in the Loop</h3>
            <p>Subscribe for exclusive offers, new arrivals, and epic deals.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required aria-label="Email for newsletter" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {year} <strong>EpicKart</strong>. All rights reserved. EpicKart is a
              registered trademark. Unauthorised reproduction of any content is strictly prohibited.
            </p>
            <p className="footer-copyright-sub">
              Made with ❤️ in Raipur, Chhattisgarh, India.
            </p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap" aria-label="Sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
