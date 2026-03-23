import './LegalPage.css';

const Privacy = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-last-updated">Last Updated: March 24, 2026</p>
      </div>
      
      <div className="legal-content">
        <h2>1. Information Collection</h2>
        <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.</p>
        
        <h2>2. Data Usage</h2>
        <p>Any of the information we collect from you may be used in one of the following ways:</p>
        <ul>
          <li>To personalize your experience.</li>
          <li>To improve our website functionality.</li>
          <li>To process transactions securely via Razorpay.</li>
          <li>To send periodic order updates via email.</li>
        </ul>
        
        <h2>3. Data Protection</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
        
        <h2>4. Third-Party Disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or processing payments (e.g., Razorpay), so long as those parties agree to keep this information confidential.</p>
      </div>
    </div>
  );
};

export default Privacy;
