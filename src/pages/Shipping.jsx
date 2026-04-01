import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';

const Shipping = () => {
  useSEO({
    title: 'Shipping Policy — Fast Delivery Across India | EpicKart',
    description:
      'EpicKart offers free standard shipping on orders above ₹999, express 1-2 day delivery, and real-time order tracking. Full delivery zones, timelines, and conditions inside.',
    keywords:
      'EpicKart shipping policy, free shipping india, fast delivery tech gadgets, EpicKart delivery time, express shipping EpicKart, order tracking EpicKart, pan-India delivery',
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
        <p className="legal-last-updated">Last Updated: April 1, 2026</p>
      </div>

      <div className="legal-content">
        <p>
          At EpicKart, we understand that fast, reliable delivery is just as important as the
          product you purchase. We partner with India's leading logistics networks — including
          Delhivery, Shiprocket, and BlueDart — to ensure that your order reaches you quickly,
          safely, and in perfect condition. Below you'll find everything you need to know about
          how we ship, when we ship, and what you can expect after placing your order.
        </p>

        <h2>1. Order Processing Time</h2>
        <p>
          All orders placed on EpicKart are processed within <strong>1–2 business days</strong> of
          receiving confirmed payment. Business days are Monday through Friday, excluding Indian
          public holidays. Orders placed on weekends (Saturday and Sunday) or public holidays will
          begin processing on the next business day.
        </p>
        <p>
          You will receive an order confirmation email immediately after placing your order, and a
          separate shipping confirmation email with tracking details once your order is dispatched
          from our warehouse in Raipur, Chhattisgarh.
        </p>

        <h2>2. Shipping Options and Delivery Timelines</h2>
        <p>
          We offer two shipping tiers to suit your schedule:
        </p>
        <ul>
          <li>
            <strong>Standard Shipping:</strong> 3–5 business days. Free on all orders above ₹999.
            Orders below ₹999 attract a flat shipping fee of ₹49.
          </li>
          <li>
            <strong>Express Shipping:</strong> 1–2 business days. Available for an additional fee
            of ₹149, regardless of order value. Available to most metro cities and Tier-1 towns.
          </li>
          <li>
            <strong>Same-Day Delivery:</strong> Available in Raipur and select pin codes for orders
            placed before 11:00 AM. Fee is ₹249. Contact us to confirm availability for your area.
          </li>
        </ul>
        <p>
          Please note that delivery timelines are estimates and may vary due to factors beyond our
          control (see Section 7). All timelines start from the date of dispatch, not the date of
          order.
        </p>

        <h2>3. Delivery Zones</h2>
        <p>We ship across all serviceable pin codes in India. Our delivery coverage:</p>
        <ul>
          <li>
            <strong>Tier-1 Cities (Metro):</strong> Mumbai, Delhi, Bangalore, Chennai, Kolkata,
            Hyderabad, Pune, Ahmedabad — Standard 2–3 days, Express 1 day.
          </li>
          <li>
            <strong>Tier-2 Cities:</strong> Raipur, Indore, Jaipur, Lucknow, Nagpur, Surat, etc.
            — Standard 3–4 days, Express 1–2 days.
          </li>
          <li>
            <strong>Tier-3 Cities and Rural Areas:</strong> Most other serviceable pin codes —
            Standard 4–6 days. Express may not be available in all areas.
          </li>
          <li>
            <strong>Remote / Difficult Access Areas:</strong> Some remote pin codes in the Northeast,
            Andaman &amp; Nicobar, Lakshadweep, Jammu &amp; Kashmir, and similar regions may take
            7–10 business days and may not support Express delivery.
          </li>
        </ul>
        <p>
          To check if Express shipping is available for your pin code, please contact us at{' '}
          <strong>support@epickart.in</strong> before placing your order.
        </p>

        <h2>4. Order Tracking</h2>
        <p>
          Once your order is dispatched, you will receive a shipping confirmation email containing:
        </p>
        <ul>
          <li>Your order tracking number.</li>
          <li>The name of the courier partner handling your delivery.</li>
          <li>A direct link to the courier's tracking portal.</li>
        </ul>
        <p>
          Tracking information typically becomes active within <strong>12–24 hours</strong> of your
          dispatch email. If your tracking number is not active after 24 hours, please contact our
          support team.
        </p>

        <h2>5. Packaging and Safety</h2>
        <p>
          EpicKart uses premium packaging to ensure your order arrives in perfect condition. All
          products are individually wrapped in bubble wrap and sealed in sturdy corrugated boxes
          with EpicKart branding. Fragile items receive additional foam padding. Our packaging is
          designed to withstand the rigours of India's diverse logistics infrastructure.
        </p>
        <p>
          We do not use single-use plastics wherever possible and are committed to progressively
          moving to sustainable packaging materials.
        </p>

        <h2>6. Delivery Attempt Policy</h2>
        <p>
          Our courier partners will make <strong>up to 3 delivery attempts</strong> if you are
          unavailable at the delivery address. After 3 failed attempts, the package will be held at
          the nearest courier hub for 5 days before being returned to our warehouse. If your order
          is returned to us, you will be refunded the product amount minus the return shipping
          cost.
        </p>
        <p>
          To avoid failed deliveries, please ensure someone is available at the delivery address
          during business hours, or provide a specific delivery time preference in your order
          notes.
        </p>

        <h2>7. Delivery Delays</h2>
        <p>
          While we do our best to meet delivery timelines, delays can sometimes occur due to factors
          outside our control, including:
        </p>
        <ul>
          <li>Extreme weather events (floods, cyclones, heavy snowfall).</li>
          <li>Courier partner operational disruptions or strikes.</li>
          <li>Public holidays or peak season congestion (Diwali, Christmas, Republic Day).</li>
          <li>Incorrect or incomplete delivery address provided at checkout.</li>
          <li>Customs or regulatory holds for certain import-related products.</li>
        </ul>
        <p>
          In the event of a significant delay, we will proactively email you with an update. You
          can always check your order status via the tracking link in your shipping confirmation
          email or by contacting us at <strong>support@epickart.in</strong>.
        </p>

        <h2>8. Damaged in Transit</h2>
        <p>
          If your order arrives visibly damaged on the outside of the packaging, please:
        </p>
        <ul>
          <li>Refuse delivery and note the damage on the delivery receipt with the courier agent, if possible.</li>
          <li>If damage is discovered after opening the package, photograph the damage immediately and contact us within 48 hours.</li>
          <li>Email clear photographs of the damaged item and packaging to <strong>support@epickart.in</strong> with your order ID.</li>
        </ul>
        <p>
          We will arrange a replacement or full refund for items damaged in transit at no cost
          to you.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For shipping-related queries, please reach out to our team:
        </p>
        <ul>
          <li><strong>Email:</strong> support@epickart.in</li>
          <li><strong>Phone:</strong> +91-9630994006 (Monday–Friday, 9 AM–6 PM IST)</li>
          <li><strong>Dispatch Address:</strong> EpicKart Warehouse, 139/144, Durga Nagar, Birgaon, Raipur, Chhattisgarh – 493221</li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
