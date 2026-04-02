import { useEffect, useRef } from 'react';
import './HilltopAd.css';

/**
 * HilltopAd – renders a Hilltop banner ad slot.
 * The ad script is injected once on mount and cleaned up on unmount.
 *
 * @param {string} id        – unique DOM id for the slot container
 * @param {'mobile'|'desktop'} variant
 *   'mobile'  → 300x100  (mobile only, hidden on desktop via CSS)
 *   'desktop' → 300x250  (desktop + mobile, always visible)
 */

const AD_SCRIPTS = {
  mobile:
    '//conventionalresponse.com/bOX.Vqs/daGll/0KYRWfcH/Uejm/9SupZ/Uol/k/PoT/Y_5/M/jVAx1CMKjmkntbN/jGkByHMHDQU/zYMCwC',
  desktop:
    '//conventionalresponse.com/b.X/VGsTdGG/l/0lYJWScI/QeYm/9tuEZKUFl/k/PaT/Ye5bMIjyA/1hNrTVc/tpNXjSkzyCMpD/UD2VMbQa',
};

const HilltopAd = ({ id = 'hilltop-ad', variant = 'mobile' }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (scriptRef.current) return; // prevent duplicate injection on re-render

    const script = document.createElement('script');
    script.src = AD_SCRIPTS[variant] ?? AD_SCRIPTS.mobile;
    script.async = true;
    script.referrerPolicy = 'no-referrer-when-downgrade';
    script.settings = {};

    containerRef.current.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      scriptRef.current = null;
    };
  }, [variant]);

  return (
    <div
      className={`hilltop-ad-wrapper hilltop-ad--${variant}`}
      id={id}
      aria-label="Advertisement"
    >
      <span className="hilltop-ad-label">Advertisement</span>
      <div className="hilltop-ad-slot" ref={containerRef} />
    </div>
  );
};

export default HilltopAd;
