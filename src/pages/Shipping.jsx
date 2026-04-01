import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';

const Shipping = () => {
  useSEO({
    title: 'Shipping Policy — Fast Delivery Across India | EpicKart',
    description: 'EpicKart offers free standard shipping on orders above ₹999, express 1-2 day delivery, and real-time order tracking. Learn about our complete shipping policy and delivery timelines.',
    keywords: 'EpicKart shipping policy, free shipping india, fast delivery tech gadgets, EpicKart delivery time, express shipping EpicKart, order tracking EpicKart',
    canonical: 'https://www.epickart.in/shipping',
    jsonLd: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Shipping Policy', path: '/shipping' },
    ]),
  });

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Shipping Policy</h1>
        <p className="legal-last-updated">Last Updated: March 24, 2026</p>
      </div>
      
      <div className="legal-content">
        <h2>1. Order Processing Time</h2>
        <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
        
        <h2>2. Shipping Rates & Delivery Estimates</h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
        <ul>
          <li><strong>Standard Shipping:</strong> 3-5 business days - ₹49 (Free on orders over ₹999)</li>
          <li><strong>Express Shipping:</strong> 1-2 business days - ₹149</li>
        </ul>
        
        <h2>3. Shipment Confirmation & Order Tracking</h2>
        <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
        
        <h2>4. Damages</h2>
        <p>EpicKart is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.</p>
      </div>
    </div>
  );
};

export default Shipping;
