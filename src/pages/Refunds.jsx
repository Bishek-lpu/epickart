import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';

const Refunds = () => {
  useSEO({
    title: 'Returns & Refunds Policy — 30-Day Easy Returns | EpicKart',
    description:
      "EpicKart's hassle-free 30-day return policy. Return any product within 30 days of delivery. Refunds are processed via Razorpay to your original payment method within 5–7 business days.",
    keywords:
      'EpicKart return policy, refund policy EpicKart, 30 day returns tech gadgets, cancel order EpicKart, EpicKart refund processing time, how to return EpicKart',
    canonical: 'https://www.epickart.in/refunds',
    jsonLd: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Returns & Refunds', path: '/refunds' },
    ]),
  });

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Returns & Refunds Policy</h1>
        <p className="legal-last-updated">Last Updated: April 1, 2026</p>
      </div>

      <div className="legal-content">
        <p>
          At EpicKart, customer satisfaction is our top priority. We want you to love every product
          you purchase from us. If for any reason you are not completely satisfied, we offer a
          comprehensive <strong>30-day return and refund policy</strong> designed to make the
          process as simple and hassle-free as possible.
        </p>

        <h2>1. 30-Day Return Window</h2>
        <p>
          You may return most products within <strong>30 calendar days</strong> of the delivery
          date. To be eligible for a return, your item must meet the following conditions:
        </p>
        <ul>
          <li>The item must be unused, in its original condition, and with all original tags attached.</li>
          <li>The item must be returned in its original packaging, including all accessories, manuals, warranty cards, and box contents.</li>
          <li>The item must not show signs of damage, wear, or misuse beyond what is normal for an unboxing inspection.</li>
          <li>The return must be initiated within 30 days of the delivery date as recorded by our logistics partner.</li>
          <li>Proof of purchase (order confirmation email or order ID) must be provided.</li>
        </ul>

        <h2>2. How to Initiate a Return</h2>
        <p>Starting your return is simple. Follow these steps:</p>
        <ul>
          <li>
            <strong>Step 1:</strong> Contact our support team at{' '}
            <strong>support@epickart.in</strong> or call us at <strong>+91-9630994006</strong>{' '}
            with your order ID and reason for return.
          </li>
          <li>
            <strong>Step 2:</strong> Our team will review your request within 1–2 business days and
            send you a Return Merchandise Authorisation (RMA) number along with return shipping
            instructions.
          </li>
          <li>
            <strong>Step 3:</strong> Securely package the item and ship it back to our returns
            address using the instructions provided. Our logistics partner will pick up the
            shipment from your location at no additional charge for eligible returns.
          </li>
          <li>
            <strong>Step 4:</strong> Once we receive and inspect the returned item (typically 1–3
            business days), we will notify you about the status of your refund or exchange.
          </li>
        </ul>

        <h2>3. Order Cancellation</h2>
        <p>
          You may cancel your order free of charge before it is dispatched from our warehouse.
          Orders can be cancelled by contacting us at <strong>support@epickart.in</strong> with
          your order ID. Please note:
        </p>
        <ul>
          <li>Orders are typically dispatched within 1–2 business days of confirmed payment.</li>
          <li>Once an order is dispatched (a shipping tracking number has been assigned), it cannot be cancelled — please use our return process after delivery.</li>
          <li>Cancelled orders will receive a full refund within 5–7 business days.</li>
        </ul>

        <h2>4. Refund Processing</h2>
        <p>
          Once your return is received and inspected, we will send you an email notification
          confirming receipt and informing you of the approval or rejection of your refund request.
          If approved, your refund will be processed to your original payment method via{' '}
          <strong>Razorpay</strong> within the following timelines:
        </p>
        <ul>
          <li><strong>UPI / Wallets:</strong> 2–4 business days to reflect in your account.</li>
          <li><strong>Debit Cards:</strong> 3–5 business days to reflect in your account.</li>
          <li><strong>Credit Cards:</strong> 5–7 business days to reflect in your account.</li>
          <li><strong>Net Banking:</strong> 3–5 business days to reflect in your account.</li>
          <li><strong>Cash on Delivery orders:</strong> Refund issued via NEFT/UPI to your bank account within 5–7 business days. Please ensure you provide your bank details to our support team.</li>
        </ul>
        <p>
          Please note that processing times may be extended during peak periods (sales events,
          festivals) or due to banking delays beyond our control.
        </p>

        <h2>5. Damaged, Defective, or Incorrect Items</h2>
        <p>
          If you receive a damaged, defective, or incorrect product, we sincerely apologise and
          will make it right immediately. In such cases:
        </p>
        <ul>
          <li>
            Please contact us within <strong>48 hours</strong> of delivery with clear photographs
            of the item and its packaging.
          </li>
          <li>
            We will arrange an immediate free pick-up and send you a replacement or issue a full
            refund — your choice.
          </li>
          <li>No RMA, no lengthy investigation — we take responsibility for damaged or wrong items.</li>
        </ul>

        <h2>6. Non-Returnable Items</h2>
        <p>The following items are not eligible for return:</p>
        <ul>
          <li>Products that have been used, installed, or are not in original condition.</li>
          <li>Products with broken seals, removed safety stickers, or tampered serial numbers.</li>
          <li>Gift cards, vouchers, or promotional items.</li>
          <li>Downloadable software products or digital licences that have been redeemed.</li>
          <li>Items returned after the 30-day window has expired.</li>
          <li>Products damaged due to customer misuse, accident, or water damage (not covered by manufacturer warranty claim).</li>
        </ul>

        <h2>7. Exchange Policy</h2>
        <p>
          We offer product exchanges (same product, different variant) subject to availability. If
          you wish to exchange your product for a different model or category, we recommend
          returning the original item for a refund and placing a new order for the desired product.
          This ensures faster processing.
        </p>

        <h2>8. Warranty Claims</h2>
        <p>
          Many products on EpicKart come with a manufacturer's warranty. Warranty claims (for
          defects arising after 30 days of purchase) must be directed to the respective
          manufacturer's service centre. Our team can assist you with contact information and the
          warranty claim process — just write to us at <strong>support@epickart.in</strong>.
        </p>

        <h2>9. Late or Missing Refunds</h2>
        <p>
          If you have not received your refund within the stated timelines, please:
        </p>
        <ul>
          <li>First, check your bank account and credit card statement again — sometimes refund entries are delayed by your bank.</li>
          <li>Contact your bank or credit card company — it can take additional business days for the refund to officially post.</li>
          <li>If you have completed these steps and still have not received your refund, please email us at <strong>support@epickart.in</strong> with your order ID and we will resolve it promptly.</li>
        </ul>

        <h2>10. Contact Us</h2>
        <p>
          For any return or refund queries, our customer support team is here to help:
        </p>
        <ul>
          <li><strong>Email:</strong> support@epickart.in</li>
          <li><strong>Phone:</strong> +91-9630994006 (Monday–Friday, 9 AM–6 PM IST)</li>
          <li><strong>Returns Address:</strong> EpicKart Returns Centre, 139/144, Durga Nagar, Birgaon, Raipur, Chhattisgarh – 493221</li>
        </ul>
      </div>
    </div>
  );
};

export default Refunds;
