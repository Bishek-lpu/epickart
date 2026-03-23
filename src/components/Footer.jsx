import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="gradient-text">EpicKart</h2>
            <p className="footer-desc">
              Your ultimate destination for premium gear and cutting-edge tech. We deliver excellence to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Website"><Globe size={20} /></a>
              <a href="#" className="social-icon" aria-label="Message"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon" aria-label="Mail"><Mail size={20} /></a>
              <a href="#" className="social-icon" aria-label="Share"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/">All Products</Link></li>
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Discounts</Link></li>
              <li><Link to="/contact">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/refunds">Returns & Refunds</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay in the Loop</h3>
            <p>Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EpicKart. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
