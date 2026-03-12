import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const ParallaxBanner = ({ isAr }) => {
  const wrapRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTextVisible(true); },
      { threshold: 0.2 }
    );
    if (wrapRef.current) obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{
      position: 'relative', width: '100vw', left: '50%', right: '50%',
      marginLeft: '-50vw', marginRight: '-50vw',
      height: '90vh', minHeight: '520px',
      backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85)',
      backgroundAttachment: 'fixed', backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,13,21,0.58)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to bottom, #050d15 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to top, #0a1628 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, rgba(35,167,150,0.07) 0%, transparent 70%)' }} />
      {['top', 'bottom'].map((pos) => (
        <div key={pos} style={{ position: 'absolute', [pos]: 0, left: 0, right: 0, height: '2px', zIndex: 3, background: 'linear-gradient(90deg, transparent 0%, #23A796 40%, #3ED4C0 60%, transparent 100%)', opacity: 0.7 }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s' }}>
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Elite Plans Logo"
              style={{ height: '90px', maxWidth: '280px', objectFit: 'contain', filter: 'brightness(1.1) drop-shadow(0 4px 24px rgba(35,167,150,0.5))' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<div style="font-size:14px;letter-spacing:0.28em;text-transform:uppercase;color:#3ED4C0;opacity:0.9;font-weight:600;font-family:'DM Sans',sans-serif;">${isAr ? 'خطط النخبة' : 'Elite Plans'}</div>`;
              }}
            />
          </div>
          <h2 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.2, textShadow: '0 4px 40px rgba(0,0,0,0.6)', marginBottom: '20px', fontFamily: isAr ? 'Cairo, sans-serif' : 'Playfair Display, serif' }}>
            {isAr ? 'نبني مستقبلك المالي بثقة واحتراف' : 'Building Your Financial Future with Confidence'}
          </h2>
          <div style={{ width: '60px', height: '2px', margin: '0 auto', background: 'linear-gradient(90deg, #23A796, #3ED4C0)', opacity: textVisible ? 1 : 0, transform: textVisible ? 'scaleX(1)' : 'scaleX(0)', transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s' }} />
        </div>
      </div>
    </div>
  );
};

const WhoWeAre = ({ t, lang, isAr }) => {
  const [bodyRef, bodyVisible] = useFadeIn();
  return (
    <>
      <div id="about-who" className="scroll-mt-24">
        <SectionHeading icon="🏢" label={isAr ? 'من نحن' : 'Who We Are'} lang={lang} />
        <p ref={bodyRef}
          className={`text-gray-300 leading-relaxed text-lg mb-16 ${isAr ? 'font-cairo text-right' : 'font-dm'}`}
          style={{ opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
          {t.about.body}
        </p>
      </div>
      <ParallaxBanner isAr={isAr} />
    </>
  );
};

export default WhoWeAre;
