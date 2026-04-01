import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';
import './About.css';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EpicKart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EpicKart is an Indian eCommerce platform dedicated to premium tech gadgets, gaming gear, audio accessories, wearables, smart home devices, and photography equipment. Founded in 2026, we curate only the finest products for tech enthusiasts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is EpicKart located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EpicKart is headquartered in Raipur, Chhattisgarh, India. We ship pan-India and are expanding our delivery network continuously.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does EpicKart select its products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our expert team of product specialists handpicks every item based on performance benchmarks, design quality, user reviews, and value for money. We test products ourselves before listing them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does EpicKart offer free shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! EpicKart offers free shipping on all orders above ₹999. Express delivery options are also available at nominal charges. Visit our Shipping Policy page for full details.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is EpicKart\'s return policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EpicKart offers a 30-day hassle-free return policy on all products. Items must be in original condition with packaging. Visit our Refunds & Returns page for the complete policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EpicKart safe to shop from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. EpicKart uses 256-bit SSL encryption for all transactions. We accept UPI, Credit/Debit Cards, and Net Banking. Your payment and personal data are fully secure.',
      },
    },
  ],
};

const About = () => {
  useSEO({
    title: 'About EpicKart — India\'s Premier Premium Tech Gadgets Store',
    description: 'Learn about EpicKart — India\'s trusted online store for premium tech gadgets, gaming gear, and audio accessories. Founded in 2026, we\'re on a mission to make premium tech accessible to everyone.',
    keywords: 'about EpicKart, EpicKart story, premium tech store india, who is EpicKart, EpicKart history, best online gadget store india',
    canonical: 'https://www.epickart.in/about',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
      ]),
      faqSchema,
    ],
  });

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">About EpicKart</h1>
        <p className="legal-last-updated">
          India's ultimate destination for premium tech gear — since 2026.
        </p>
      </div>

      <div className="legal-content about-content">

        <h2>Our Story</h2>
        <p>
          Founded in 2026 with a burning passion for cutting-edge technology and exceptional design, EpicKart began
          as a small, curated idea out of Raipur, Chhattisgarh. What started as a passion project between a handful
          of tech enthusiasts quickly evolved into a dynamic eCommerce platform that now serves thousands of
          customers across India.
        </p>
        <p>
          We noticed a gap in the Indian market — premium, internationally-acclaimed tech products were either
          unavailable, overpriced, or buried under a sea of low-quality alternatives on crowded marketplaces.
          EpicKart was born to fix exactly that. We built a store where every single product earns its place,
          where quality is non-negotiable, and where the shopping experience matches the excellence of the
          products themselves.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe technology isn't just about utility — it's about lifestyle, self-expression, and empowerment.
          Our mission is simple: <strong>democratize access to high-performance, aesthetically stunning electronics
          for every tech enthusiast in India</strong>, regardless of city or budget tier.
        </p>
        <p>
          Whether you're a professional gamer searching for your competitive edge, a content creator building the
          perfect studio setup, a remote worker optimizing your home office, or simply someone who wants the best
          music experience — EpicKart has the gear for you.
        </p>

        <h2>What We Sell</h2>
        <p>
          Our catalog spans across the most sought-after tech categories:
        </p>
        <ul>
          <li><strong>🎧 Audio:</strong> Noise-cancelling headphones, studio microphones, wireless earbuds, soundbars</li>
          <li><strong>🎮 Gaming:</strong> Gaming mice, VR headsets, mechanical keyboards, high-refresh-rate monitors</li>
          <li><strong>⌚ Wearables:</strong> Smartwatches, fitness bands, smart rings</li>
          <li><strong>🏠 Smart Home:</strong> Smart speakers, RGB lighting, smart displays, mesh WiFi systems</li>
          <li><strong>💻 Computing:</strong> Ultra-wide monitors, portable SSDs, tablets, mesh routers</li>
          <li><strong>📸 Photography:</strong> 4K action cameras, camera bags, lens accessories</li>
          <li><strong>🔌 Accessories:</strong> Power banks, ergonomic peripherals, DSLR backpacks</li>
        </ul>

        <h2>Why Choose EpicKart?</h2>
        <ul>
          <li>
            <strong>Curated Quality:</strong> Every product is handpicked by our expert team, tested against rigorous
            performance and design standards. We only list what we'd happily use ourselves.
          </li>
          <li>
            <strong>Premium Experience:</strong> From our beautifully designed website to our fast and safe checkout
            process, we obsess over every touchpoint of your shopping journey.
          </li>
          <li>
            <strong>Fast & Reliable Delivery:</strong> We partner with India's top logistics networks to ensure
            your orders arrive on time, every time — often within 2–5 business days.
          </li>
          <li>
            <strong>30-Day Easy Returns:</strong> Not satisfied? We make returns completely hassle-free with a
            full refund within 30 days of your purchase.
          </li>
          <li>
            <strong>Secure Payments:</strong> Shop with confidence using UPI, cards, net banking, and EMI options —
            all protected by bank-grade 256-bit SSL encryption.
          </li>
          <li>
            <strong>Dedicated Support:</strong> Our Raipur-based support team is available via email and chat to
            resolve any query quickly and professionally.
          </li>
        </ul>

        <h2>Our Impact &amp; Community</h2>
        <p>
          Since launch, EpicKart has served over <strong>10,000+ happy customers</strong>, fulfilled orders in
          <strong> 500+ cities across India</strong>, and maintained an average product rating of
          <strong> 4.8/5 stars</strong>. We are more than a store — we are a growing community of tech enthusiasts
          who share a love for great gear.
        </p>
        <p>
          We are constantly expanding our catalog, adding new brands, and discovering the next generation of
          incredible tech products. Follow us on social media, subscribe to our newsletter, and join the EpicKart
          community to never miss a new arrival, exclusive deal, or epic offer.
        </p>

        <h2>Join the Epic Lifestyle</h2>
        <p>
          Life is too short for mediocre gear. Whether you're upgrading your workspace, gearing up for game day,
          or treating yourself to premium sound, EpicKart is your trusted partner for every tech upgrade.
          <strong> Never settle for anything less than epic.</strong>
        </p>

        <div className="about-cta">
          <a href="/" className="btn btn-primary" aria-label="Shop all products at EpicKart">
            Shop Now
          </a>
          <a href="/contact" className="btn btn-secondary" aria-label="Contact EpicKart support">
            Get in Touch
          </a>
        </div>

        {/* ── FAQ Section — JSON-LD eligible ───────────────── */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary><strong>What is EpicKart?</strong></summary>
          <p>
            EpicKart is an Indian eCommerce platform dedicated to premium tech gadgets, gaming gear, audio
            accessories, wearables, smart home devices, and photography equipment. Founded in 2026, we curate
            only the finest products for tech enthusiasts.
          </p>
        </details>

        <details className="faq-item">
          <summary><strong>Where is EpicKart located?</strong></summary>
          <p>
            EpicKart is headquartered in Raipur, Chhattisgarh, India. We ship pan-India and are expanding
            our delivery network continuously.
          </p>
        </details>

        <details className="faq-item">
          <summary><strong>How does EpicKart select its products?</strong></summary>
          <p>
            Our expert team of product specialists handpicks every item based on performance benchmarks,
            design quality, user reviews, and value for money. We test products ourselves before listing them.
          </p>
        </details>

        <details className="faq-item">
          <summary><strong>Does EpicKart offer free shipping?</strong></summary>
          <p>
            Yes! EpicKart offers free shipping on all orders above ₹999. Express delivery options are also
            available at nominal charges. Visit our{' '}
            <a href="/shipping">Shipping Policy</a> page for full details.
          </p>
        </details>

        <details className="faq-item">
          <summary><strong>What is EpicKart's return policy?</strong></summary>
          <p>
            EpicKart offers a 30-day hassle-free return policy on all products. Items must be in original
            condition with packaging. Visit our{' '}
            <a href="/refunds">Refunds &amp; Returns</a> page for the complete policy.
          </p>
        </details>

        <details className="faq-item">
          <summary><strong>Is EpicKart safe to shop from?</strong></summary>
          <p>
            Absolutely. EpicKart uses 256-bit SSL encryption for all transactions. We accept UPI,
            Credit/Debit Cards, and Net Banking. Your payment and personal data are fully secure.
          </p>
        </details>
      </div>
    </div>
  );
};

export default About;
