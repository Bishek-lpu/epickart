import './LegalPage.css';

const Refunds = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Cancellation and Refunds</h1>
        <p className="legal-last-updated">Last Updated: March 24, 2026</p>
      </div>
      
      <div className="legal-content">
        <h2>1. Order Cancellation</h2>
        <p>You can cancel your order within 24 hours of placing it. Once the order has been processed and shipped, it cannot be canceled. If you still wish to return the item, please refer to our Returns policy.</p>
        
        <h2>2. Return Policy</h2>
        <p>We accept returns within 7 days of the delivery date. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging.</p>
        
        <h2>3. Refund Processing</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If you are approved, your refund will be processed via Razorpay.</p>
        <ul>
          <li><strong>Credit Cards/Debit Cards:</strong> 5-7 business days to reflect in your account.</li>
          <li><strong>UPI/Wallets:</strong> 2-4 business days.</li>
        </ul>
        
        <h2>4. Non-Returnable Items</h2>
        <p>Several types of goods are exempt from being returned:</p>
        <ul>
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Opened software or media</li>
        </ul>
        
        <h2>5. Late or Missing Refunds</h2>
        <p>If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. If you've done all of this and you still have not received your refund, please contact us.</p>
      </div>
    </div>
  );
};

export default Refunds;
