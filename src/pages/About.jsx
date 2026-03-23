import './LegalPage.css';

const About = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">About EpicKart</h1>
        <p className="legal-last-updated">Your ultimate destination for premium tech gear.</p>
      </div>
      
      <div className="legal-content">
        <h2>Our Story</h2>
        <p>Founded with a passion for cutting-edge technology and exceptional design, EpicKart started as a small idea in 2026. Today, we've grown into a dynamic eCommerce platform dedicated to bringing the finest curated audio, gaming, and smart home accessories directly to tech enthusiasts everywhere.</p>
        
        <h2>Our Mission</h2>
        <p>We believe that technology isn't just about utility; it's about lifestyle. Our mission is to democratize access to high-performance, aesthetically pleasing electronics while maintaining an uncompromising commitment to customer service and delivery speed.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Curated Quality:</strong> We handpick every product, ensuring it meets our rigorous standards for performance and design.</li>
          <li><strong>Premium Experience:</strong> From our seamless Website UI to our fast checkout, we prioritize your experience.</li>
          <li><strong>Dedicated Support:</strong> Operating out of our headquarters in Raipur, our support team is always ready to assist.</li>
        </ul>
        
        <h2>Join the Epic Lifestyle</h2>
        <p>We are constantly expanding our catalog and finding the next best pieces of tech gear. Follow our journey, subscribe to our newsletter, and never settle for anything less than epic.</p>
      </div>
    </div>
  );
};

export default About;
