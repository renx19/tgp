import React, { useRef, useEffect } from 'react';
import Terms from './FooterUl/Terms';
import FAQ from './FooterUl/FAQ';
import Privacy from './FooterUl/Privacy';
import '../styles/ulfooter.css';
import { useLocation } from 'react-router-dom';

function FooterLinks() {
  const termsRef = useRef(null);
  const privacyRef = useRef(null);
  const faqRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.slice(1);
      if (section === 'terms' && termsRef.current) {
        termsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'privacy' && privacyRef.current) {
        privacyRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'faq' && faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='container'>
      <div className='footer-ul'>
        <div ref={termsRef}>
          <Terms />
        </div>
        <div ref={privacyRef}>
          <Privacy />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
