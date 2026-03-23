import './LegalPage.css';

const Contact = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Contact Us</h1>
        <p className="legal-last-updated">We'd love to hear from you.</p>
      </div>
      
      <div className="legal-content">
        <h2>Get in Touch</h2>
        <p>If you have any questions, concerns, or feedback, please reach out to us through any of the following methods:</p>
        
        <h3>Email Support</h3>
        <p>For order inquiries and support: <strong>support@epickart.com</strong></p>
        <p>We strive to respond to all emails within 24 hours.</p>
        
        <h3>Phone Support</h3>
        <p>Call us at: <strong>9630994006</strong></p>
        <p>Operating Hours: Monday to Friday, 9:00 AM - 6:00 PM (IST)</p>
        
        <h3>Office Address</h3>
        <p>
          EpicKart Logistics & Headquarters<br/>
          139/144, Durga Nagar, Birgaon<br/>
          Raipur, Chhattisgarh, 493221
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ marginTop: 0 }}>Send us a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)' }} required />
            <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)' }} required />
            <textarea rows="4" placeholder="How can we help you?" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)', fontFamily: 'inherit' }} required></textarea>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
