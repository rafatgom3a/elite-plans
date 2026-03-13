import SectionHeading from './SectionHeading';

const partners = [
  { src: '/daftra.jpeg', alt: 'Partner 1' },
  { src: '/odoo.png',   alt: 'Partner 2' },
  { src: '/alemny.jpg', alt: 'Partner 3' },
  { src: '/qoyod.jpeg', alt: 'Partner 4' },
];

const OurPartners = ({ lang, isAr }) => (
  <div id="about-partners" className="scroll-mt-24 mb-20">
    <SectionHeading icon="👥" label={isAr ? 'شركاؤنا' : 'Our Partners'} lang={lang} />
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {partners.map((p, i) => (
        <div key={i}
          className="rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(35,167,150,0.18)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.25)', minHeight: '200px', padding: '20px 24px',
          }}>
          <img src={p.src} alt={p.alt}
            className="w-full h-full object-contain transition-all duration-300 hover:scale-105 rounded-3xl"
            style={{ maxHeight: '140px', filter: 'brightness(1.05)' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML += `<div style="color:rgba(35,167,150,0.4);font-size:13px;text-align:center">${p.alt}</div>`;
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default OurPartners;
