import { useEffect, useRef } from 'react';
import './HilltopAd.css';

/**
 * HilltopAd – renders the Hilltop 300×100 banner ad (mobile only).
 * The ad script is injected once and cleaned up on unmount.
 *
 * @param {string} id   - unique id for the ad slot container (defaults to 'hilltop-ad')
 */
const HilltopAd = ({ id = 'hilltop-ad' }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Avoid duplicate script injection if the component re-renders
    if (scriptRef.current) return;

    const script = document.createElement('script');
    script.src =
      '//conventionalresponse.com/bOX.Vqs/daGll/0KYRWfcH/Uejm/9SupZ/Uol/k/PoT/Y_5/M/jVAx1CMKjmkntbN/jGkByHMHDQU/zYMCwC';
    script.async = true;
    script.referrerPolicy = 'no-referrer-when-downgrade';
    script.settings = {};

    containerRef.current.appendChild(script);
    scriptRef.current = script;

    return () => {
      // Clean up the script on unmount
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      scriptRef.current = null;
    };
  }, []);

  return (
    <div className="hilltop-ad-wrapper" id={id} aria-label="Advertisement">
      <span className="hilltop-ad-label">Advertisement</span>
      <div className="hilltop-ad-slot" ref={containerRef} />
    </div>
  );
};

export default HilltopAd;
