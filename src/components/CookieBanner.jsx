import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import './CookieBanner.css';

const STORAGE_KEY = 'epickart_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so banner doesn't flash immediately on page load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-icon-wrap" aria-hidden="true">
          <Cookie size={24} />
        </div>
        <div className="cookie-text">
          <p className="cookie-title">We value your privacy</p>
          <p className="cookie-desc">
            We use cookies to enhance your browsing experience, personalise content, and show
            relevant advertisements — including via{' '}
            <strong>Google AdSense</strong>. By clicking &ldquo;Accept&rdquo;, you consent to our use
            of cookies. You can learn more in our{' '}
            <Link to="/privacy" className="cookie-link" onClick={handleAccept}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="cookie-actions">
          <button
            id="cookie-accept-btn"
            className="btn btn-primary cookie-btn"
            onClick={handleAccept}
            aria-label="Accept all cookies"
          >
            Accept All
          </button>
          <button
            id="cookie-decline-btn"
            className="cookie-btn-outline"
            onClick={handleDecline}
            aria-label="Decline optional cookies"
          >
            Decline
          </button>
        </div>
        <button
          className="cookie-close"
          onClick={handleDecline}
          aria-label="Close cookie banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
