import React, { useEffect, useRef } from 'react';
import './AdsSection.css';

/**
 * AdsSection component to display monetization ads professionally.
 */
const AdsSection = ({ title = "Sponsored Content", className = "" }) => {
  const adContainerRef = useRef(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (scriptInjected.current) return;

    // The script provided by the user
    const injectAdScript = () => {
      try {
        (function(dddpm) {
          var d = document,
            s = d.createElement('script'),
            // We target a specific element instead of d.scripts[d.scripts.length - 1] 
            // for reliability in React
            l = adContainerRef.current; 
          
          if (!l) return;

          s.settings = dddpm || {};
          s.src = "//limited-teacher.com/cADL9z6.bO2y5clySFWeQ/9-N/jrkqx/OOTrg/4iNGSh0I2/OuTREm5MOeDTge5f";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          
          // Insert the script into our container
          l.appendChild(s);
        })({});
        scriptInjected.current = true;
      } catch (e) {
        console.error("Ad script injection failed:", e);
      }
    };

    // Small delay to ensure DOM is ready and avoid layout shift
    const timer = setTimeout(injectAdScript, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`ads-section ${className}`} aria-label="Advertisement">
      <div className="ads-container">
        <div className="ads-header">
          <span className="ads-label">{title}</span>
        </div>
        <div className="ads-placeholder" ref={adContainerRef}>
          {/* The ad script will inject its content here */}
          <div className="ads-loading-hint">Loading advertisement...</div>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
