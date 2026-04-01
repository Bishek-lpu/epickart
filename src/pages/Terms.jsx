import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';

const Terms = () => {
  useSEO({
    title: 'Terms & Conditions | EpicKart Online Store',
    description:
      "Read EpicKart's complete Terms and Conditions of use covering user obligations, intellectual property, payments via Razorpay, disclaimers, and governing law for India.",
    keywords:
      'EpicKart terms and conditions, EpicKart terms of service, EpicKart usage policy, Razorpay EpicKart payment terms, online shopping terms india',
    canonical: 'https://www.epickart.in/terms',
    jsonLd: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms' },
    ]),
  });

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Terms and Conditions</h1>
        <p className="legal-last-updated">Last Updated: April 1, 2026</p>
      </div>

      <div className="legal-content">
        <p>
          Please read these Terms and Conditions ("Terms") carefully before using the EpicKart
          website located at <strong>www.epickart.in</strong> (the "Site") operated by EpicKart
          ("we", "us", or "our"). By accessing or using our Site, placing an order, or creating an
          account, you agree to be legally bound by these Terms. If you do not agree to these
          Terms, please do not use our Site.
        </p>

        <h2>1. Introduction and Acceptance</h2>
        <p>
          EpicKart is an Indian e-commerce platform specialising in premium tech gadgets, gaming
          gear, audio accessories, wearables, smart home devices, and photography equipment. These
          Terms constitute a legally binding agreement between you and EpicKart. We reserve the
          right to modify these Terms at any time. Any changes will be posted on this page with an
          updated "Last Updated" date. Your continued use of the Site after any modification
          constitutes acceptance of the new Terms.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          To use our Site and make a purchase, you must be at least 18 years of age. By using our
          Site, you represent and warrant that:
        </p>
        <ul>
          <li>You are at least 18 years of age.</li>
          <li>
            You have the legal capacity to enter into a binding contract under the Indian Contract
            Act, 1872.
          </li>
          <li>You are accessing our Site from within India or a jurisdiction where our services are lawfully available.</li>
          <li>All information you provide to us is accurate and complete.</li>
        </ul>

        <h2>3. Intellectual Property Rights</h2>
        <p>
          All content on this Site — including text, graphics, logos, button icons, images, audio
          clips, digital downloads, data compilations, and software — is the property of EpicKart
          or its content suppliers and is protected by Indian and international copyright, trademark,
          and other intellectual property laws.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable, revocable licence to access
          and use our Site for personal, non-commercial purposes only. You may not:
        </p>
        <ul>
          <li>Reproduce, distribute, or commercially exploit any content from this Site without express written permission from EpicKart.</li>
          <li>Frame or mirror any part of our Site without prior written authorisation.</li>
          <li>Use any automated tools (bots, crawlers, scrapers) to access our Site without written permission.</li>
          <li>Remove or alter any copyright, trademark, or other proprietary notices from any content.</li>
          <li>Use our trademarks, logos, or brand assets without express written permission.</li>
        </ul>

        <h2>4. Product Information and Pricing</h2>
        <p>
          We make every effort to ensure that product descriptions, images, and pricing on our Site
          are accurate. However:
        </p>
        <ul>
          <li>Product images are for illustrative purposes only. The actual product may differ slightly in appearance.</li>
          <li>Prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise.</li>
          <li>We reserve the right to correct pricing errors at any time. If an order is placed at an incorrect price, we will notify you and offer you the option to confirm the order at the correct price or cancel for a full refund.</li>
          <li>Product availability is subject to change without notice.</li>
          <li>EpicKart reserves the right to limit quantities purchased per customer.</li>
        </ul>

        <h2>5. Orders and Contract of Sale</h2>
        <p>
          When you place an order on our Site, you are making an offer to purchase the selected
          products. A contract of sale is formed only when we send you an order confirmation email
          acknowledging your order and initiating processing. We reserve the right to refuse or
          cancel any order at our sole discretion, including in cases of:
        </p>
        <ul>
          <li>Suspected fraud or unauthorised payment.</li>
          <li>Pricing errors on our Site.</li>
          <li>Product unavailability or discontinuation.</li>
          <li>Delivery address outside our serviceable zone.</li>
        </ul>

        <h2>6. Payments via Razorpay</h2>
        <p>
          All transactions on this Site are processed securely through <strong>Razorpay</strong>, a
          third-party payment gateway. By making a purchase, you agree to comply with Razorpay's
          Terms of Service and Privacy Policy. We accept the following payment methods:
        </p>
        <ul>
          <li>UPI (Google Pay, PhonePe, BHIM, Paytm, etc.)</li>
          <li>Credit Cards (Visa, Mastercard, RuPay, Amex)</li>
          <li>Debit Cards</li>
          <li>Net Banking</li>
          <li>EMI (on eligible cards and orders)</li>
          <li>Cash on Delivery (selected pin codes)</li>
        </ul>
        <p>
          Payment must be made in full at the time of ordering (except for Cash on Delivery
          orders). All payments are subject to bank and payment gateway processing times.
        </p>

        <h2>7. Shipping and Delivery</h2>
        <p>
          We strive to dispatch all orders within 1–2 business days of confirmed payment. Delivery
          timelines depend on your location and chosen shipping method. For full details, please
          review our <a href="/shipping">Shipping Policy</a>. EpicKart is not responsible for
          delays caused by courier partners, natural disasters, strikes, or other events beyond our
          control.
        </p>

        <h2>8. Returns, Refunds and Cancellations</h2>
        <p>
          Our returns and refund policy governs your right to return products and request refunds.
          Please review our <a href="/refunds">Returns &amp; Refunds Policy</a> for complete
          details. Returns are subject to the product being in its original condition with all
          packaging and accessories intact.
        </p>

        <h2>9. User Conduct</h2>
        <p>When using our Site, you agree not to:</p>
        <ul>
          <li>Violate any applicable Indian or international laws or regulations.</li>
          <li>Transmit any harmful, offensive, defamatory, or otherwise objectionable content.</li>
          <li>Attempt to gain unauthorised access to our systems, servers, or databases.</li>
          <li>Interfere with or disrupt the integrity or performance of our Site.</li>
          <li>Engage in any form of fraudulent activity, including providing false personal or payment information.</li>
          <li>Post or transmit unsolicited commercial communications (spam).</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, EpicKart shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, including but not
          limited to loss of profits, data, goodwill, or other intangible losses, resulting from:
        </p>
        <ul>
          <li>Your use of, or inability to use, our Site or our products.</li>
          <li>Errors or inaccuracies in product descriptions or pricing.</li>
          <li>Unauthorised access to or use of our servers or databases.</li>
          <li>Interruption or disruption to transmissions to or from our Site.</li>
          <li>Any bugs, viruses, or other harmful code transmitted through our Site.</li>
        </ul>
        <p>
          Our total liability to you for any claim arising from your use of our Site or purchase of
          our products shall not exceed the amount you paid for the specific product giving rise to
          the claim.
        </p>

        <h2>11. Disclaimer of Warranties</h2>
        <p>
          Our Site and its contents are provided "as is" and "as available" without any warranties
          of any kind, either express or implied. To the maximum extent permissible by law, we
          disclaim all warranties, including implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We do not guarantee that our Site will be
          uninterrupted, error-free, or free of viruses or other harmful components.
        </p>

        <h2>12. Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites. These links are provided for your
          convenience only. EpicKart does not control such websites and is not responsible for
          their content, privacy practices, or any other aspect of their operations. Accessing
          third-party websites from our Site is entirely at your own risk.
        </p>

        <h2>13. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India,
          without regard to conflict of law principles. Any disputes arising from these Terms or
          your use of our Site shall be subject to the exclusive jurisdiction of the courts of
          Raipur, Chhattisgarh, India. We encourage you to contact us first at{' '}
          <strong>support@epickart.in</strong> to resolve any disputes amicably before initiating
          legal proceedings.
        </p>

        <h2>14. Contact Information</h2>
        <p>
          If you have questions about these Terms and Conditions, please contact us at:
        </p>
        <ul>
          <li><strong>Email:</strong> support@epickart.in</li>
          <li><strong>Phone:</strong> +91-9630994006</li>
          <li><strong>Address:</strong> EpicKart, 139/144, Durga Nagar, Birgaon, Raipur, Chhattisgarh – 493221, India</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
