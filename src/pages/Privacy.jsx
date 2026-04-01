import { useSEO, breadcrumbSchema } from '../utils/seo';
import './LegalPage.css';

const Privacy = () => {
  useSEO({
    title: 'Privacy Policy — How EpicKart Protects Your Data',
    description:
      "EpicKart's Privacy Policy explains how we collect, use, and protect your personal information. We use 256-bit SSL encryption and never sell your data to third parties. Includes Google AdSense cookie disclosure.",
    keywords:
      'EpicKart privacy policy, data protection EpicKart, personal information EpicKart, GDPR EpicKart, secure shopping EpicKart, Google AdSense cookies',
    canonical: 'https://www.epickart.in/privacy',
    noIndex: false,
    jsonLd: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ]),
  });

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-last-updated">Last Updated: April 1, 2026</p>
      </div>

      <div className="legal-content">
        <p>
          This Privacy Policy describes how EpicKart ("we", "us", or "our") collects, uses, and
          shares information about you when you use our website at{' '}
          <strong>www.epickart.in</strong> (the "Site") and the choices you have associated with
          that information. By using our Site, you agree to the collection and use of information
          in accordance with this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information in several ways to provide and improve our services to you. The
          types of information we collect include:
        </p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Name, email address, phone number,
            and delivery address when you register an account, place an order, or fill out a
            contact form on our Site.
          </li>
          <li>
            <strong>Payment Information:</strong> When you make a purchase, payment is processed
            securely through Razorpay. We do not store your credit/debit card numbers or UPI IDs on
            our servers. Razorpay's privacy policy governs their handling of your payment data.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect information about how you interact
            with our Site, including your IP address, browser type, operating system, pages visited,
            time spent on pages, referring URLs, and clickstream data.
          </li>
          <li>
            <strong>Device Information:</strong> Information about the device you use to access our
            Site, including hardware model, operating system version, unique device identifiers, and
            mobile network information.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and
            similar tracking technologies to collect and store information about your use of our
            Site. See Section 5 for detailed information.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>Order Processing:</strong> To process and fulfil your orders, send order
            confirmations, shipping notifications, and handle returns or refunds.
          </li>
          <li>
            <strong>Account Management:</strong> To create and maintain your account, verify your
            identity, and provide customer support.
          </li>
          <li>
            <strong>Communication:</strong> To send you transactional emails, respond to your
            enquiries, send newsletters (with your consent), and notify you about changes to our
            policies or products.
          </li>
          <li>
            <strong>Personalisation:</strong> To personalise your shopping experience, recommend
            products that may interest you, and remember your preferences.
          </li>
          <li>
            <strong>Analytics and Improvement:</strong> To understand how our Site is used, identify
            trends, diagnose technical problems, and improve our website design, content, and
            product offerings.
          </li>
          <li>
            <strong>Advertising:</strong> To show you relevant advertisements on our Site and across
            the web. See Section 6 for details on third-party advertising.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal
            processes, and to protect the rights, privacy, safety, or property of EpicKart, our
            customers, and others.
          </li>
        </ul>

        <h2>3. Legal Basis for Processing (DPDP Act, India)</h2>
        <p>
          Under India's Digital Personal Data Protection (DPDP) Act, 2023, we process your personal
          data under the following lawful bases:
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> Where you have provided explicit consent (e.g., for marketing
            emails, cookies, personalised advertising).
          </li>
          <li>
            <strong>Contractual Necessity:</strong> Where processing is necessary to fulfil a
            contract with you (e.g., processing your order and delivering your purchase).
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Where we have a legitimate business interest that
            is not overridden by your rights (e.g., fraud prevention, website security, analytics).
          </li>
          <li>
            <strong>Legal Obligation:</strong> Where we are required to process your data to comply
            with applicable law.
          </li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share
          your information in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We work with trusted third-party companies that
            perform services on our behalf, such as payment processing (Razorpay), logistics and
            shipping partners, email service providers, analytics tools (Google Analytics), and cloud
            hosting services. These companies are contractually bound to use your information only
            as directed by us and in accordance with this Privacy Policy.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required to do
            so by law, court order, or governmental authority, or if we believe that such action is
            necessary to protect the rights, property, or safety of EpicKart, our customers, or
            others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
            all or a portion of our assets, your information may be transferred as part of that
            transaction.
          </li>
          <li>
            <strong>Advertising Partners:</strong> We share anonymised or aggregated data (which
            cannot be used to identify you personally) with advertising partners. See Section 6 for
            details.
          </li>
        </ul>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          Our Site uses cookies and similar tracking technologies. A cookie is a small text file
          placed on your device by a website you visit. Cookies help us remember your preferences,
          analyse Site traffic, and provide personalised experiences.
        </p>
        <p>We use the following types of cookies:</p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Necessary for the Site to function correctly. These
            include session cookies for your shopping cart and login status. These cannot be
            disabled.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors
            interact with our Site. Google Analytics collects data such as pages visited, time on
            site, and source of traffic. This data is aggregated and anonymised.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to serve relevant advertisements. See Section
            6 for details on Google AdSense.
          </li>
          <li>
            <strong>Preference Cookies:</strong> Used to remember your preferences such as theme
            (light/dark mode) and shopping cart contents.
          </li>
        </ul>
        <p>
          You can control cookies through our cookie consent banner and through your browser
          settings. Most browsers allow you to refuse cookies or to be notified when cookies are
          sent. However, disabling certain cookies may affect your ability to use some features of
          our Site.
        </p>

        <h2>6. Google AdSense and Third-Party Advertising</h2>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements on our Site. Google
          AdSense is an advertising service provided by Google LLC. When you visit our Site, Google
          AdSense and its partners may:
        </p>
        <ul>
          <li>
            Use cookies, web beacons, and similar technologies to collect information about your
            visits to this Site and other websites.
          </li>
          <li>
            Use that information to display advertisements based on your interests and browsing
            behaviour (personalised/interest-based advertising).
          </li>
          <li>
            Use the DoubleClick cookie to serve ads and report on ad interactions across the web.
          </li>
        </ul>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads to users
          based on their visit to our Site and/or other sites on the Internet. You may opt out of
          personalised advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Ads Settings
          </a>{' '}
          or by visiting{' '}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            www.aboutads.info
          </a>
          . You can also opt out by visiting the{' '}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>
        <p>
          For more information about Google's privacy practices and how Google uses data from
          partner sites, please visit{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Partner Privacy Policy
          </a>
          .
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfil the purposes
          outlined in this Privacy Policy, unless a longer retention period is required or permitted
          by law. Specifically:
        </p>
        <ul>
          <li>Account information is retained for as long as your account is active.</li>
          <li>
            Order information is retained for 7 years from the date of purchase for tax and legal
            compliance purposes.
          </li>
          <li>Analytics data is retained for 26 months.</li>
          <li>Marketing consent records are retained until withdrawn.</li>
        </ul>

        <h2>8. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information
          from unauthorised access, disclosure, alteration, or destruction. These include:
        </p>
        <ul>
          <li>256-bit SSL/TLS encryption for all data transmitted via our Site.</li>
          <li>Secure, access-controlled servers hosted in India-based data centres.</li>
          <li>Regular security audits and vulnerability assessments.</li>
          <li>
            Strict internal access controls — only authorised personnel can access personal data.
          </li>
          <li>Payment data processed exclusively through PCI-DSS compliant Razorpay.</li>
        </ul>
        <p>
          Despite these measures, no method of electronic transmission or storage is 100% secure.
          We cannot guarantee absolute security of your information.
        </p>

        <h2>9. Your Rights</h2>
        <p>
          As a user in India, under the Digital Personal Data Protection (DPDP) Act, 2023, and
          as a global user, you have the following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Right to Access:</strong> You may request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Right to Correction:</strong> You may request that we correct inaccurate or
            incomplete personal data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> You may request that we delete your personal data,
            subject to certain legal obligations.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process
            your data, you may withdraw it at any time. This will not affect the lawfulness of
            prior processing.
          </li>
          <li>
            <strong>Right to Grievance Redressal:</strong> You may file a complaint with us or
            with the Data Protection Board of India if you believe your rights have been violated.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <strong>support@epickart.in</strong>. We will respond to your request within 30 days.
        </p>

        <h2>10. Children's Privacy</h2>
        <p>
          Our Site is not directed to children under the age of 18. We do not knowingly collect
          personal information from children. If we learn that we have collected personal
          information from a child under 18 without parental consent, we will promptly delete that
          information. If you believe we have collected information from a child, please contact us
          at <strong>support@epickart.in</strong>.
        </p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or other factors. When we update this policy, we will
          revise the "Last Updated" date at the top of this page. We encourage you to review this
          Privacy Policy periodically. Your continued use of our Site after any changes constitutes
          your acceptance of the updated policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our
          data practices, please contact our Privacy team:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> support@epickart.in
          </li>
          <li>
            <strong>Address:</strong> EpicKart, 139/144, Durga Nagar, Birgaon, Raipur,
            Chhattisgarh – 493221, India
          </li>
          <li>
            <strong>Phone:</strong> +91-9630994006 (Monday–Friday, 9 AM–6 PM IST)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
