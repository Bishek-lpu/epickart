import './LegalPage.css';

const Terms = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Terms and Conditions</h1>
        <p className="legal-last-updated">Last Updated: March 24, 2026</p>
      </div>
      
      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>Welcome to EpicKart. These terms and conditions outline the rules and regulations for the use of EpicKart's Website.</p>
        
        <h2>2. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, EpicKart and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
        
        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any Website material in any other media.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
          <li>Publicly performing and/or showing any Website material.</li>
          <li>Using this Website in any way that is or may be damaging to this Website.</li>
        </ul>
        
        <h2>4. Disclaimer</h2>
        <p>This Website is provided "as is," with all faults, and EpicKart expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>
        
        <h2>5. Razorpay Payments</h2>
        <p>All transactions on this website are processed via Razorpay. By making a purchase, you agree to comply with Razorpay's processing terms.</p>
      </div>
    </div>
  );
};

export default Terms;
