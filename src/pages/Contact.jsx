import { useState } from 'react';
import { useSEO, breadcrumbSchema } from '../utils/seo';
import { CheckCircle, Send } from 'lucide-react';
import './LegalPage.css';
import './Contact.css';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'EpicKart',
  url: 'https://www.epickart.in',
  email: 'support@epickart.in',
  telephone: '+91-9630994006',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '139/144, Durga Nagar, Birgaon',
    addressLocality: 'Raipur',
    addressRegion: 'Chhattisgarh',
    postalCode: '493221',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@epickart.in',
    telephone: '+91-9630994006',
    availableLanguage: ['English', 'Hindi'],
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useSEO({
    title: 'Contact EpicKart — Customer Support | Help Centre',
    description:
      "Get in touch with EpicKart's customer support team. Reach us via email at support@epickart.in or call +91-9630994006. We respond within 24 hours, Monday to Friday.",
    keywords:
      'contact EpicKart, EpicKart customer support, EpicKart help centre, EpicKart email, EpicKart phone number, EpicKart Raipur',
    canonical: 'https://www.epickart.in/contact',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ]),
      localBusinessSchema,
    ],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a 1-second send delay for UX realism
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Contact Us</h1>
        <p className="legal-last-updated">We'd love to hear from you.</p>
      </div>

      <div className="legal-content">
        {/* Contact Information Cards */}
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">📧</div>
            <h3>Email Support</h3>
            <p>
              <a href="mailto:support@epickart.in">support@epickart.in</a>
            </p>
            <span className="contact-info-note">Respond within 24 hours</span>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">📞</div>
            <h3>Phone Support</h3>
            <p>
              <a href="tel:+919630994006">+91-9630994006</a>
            </p>
            <span className="contact-info-note">Mon–Fri, 9 AM – 6 PM IST</span>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">📍</div>
            <h3>Office Address</h3>
            <p>139/144, Durga Nagar, Birgaon</p>
            <span className="contact-info-note">Raipur, Chhattisgarh – 493221</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 style={{ marginTop: 0 }}>Send us a Message</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Have a question about an order, a product, or anything else? Fill out the form below
            and our team will get back to you within one business day.
          </p>

          {submitted ? (
            <div className="contact-success" role="alert" aria-live="polite">
              <CheckCircle size={48} className="success-icon" />
              <h3>Message Received!</h3>
              <p>
                Thank you for reaching out, <strong>{formData.name || 'valued customer'}</strong>.
                Our team will review your message and respond to your email within 24 hours on
                business days.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '1rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Arjun Mehta"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="arjun@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Order enquiry, Product question, Return request..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                id="contact-submit-btn"
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="btn-spinner" aria-hidden="true" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
