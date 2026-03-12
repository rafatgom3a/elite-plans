import SectionHeading from './SectionHeading';

const clients = [
  { src: '/client1.png',  alt: 'Client 1'  },
  { src: '/client2.png',  alt: 'Client 2'  },
  { src: '/client3.png',  alt: 'Client 3'  },
  { src: '/client4.png',  alt: 'Client 4'  },
  { src: '/client5.png',  alt: 'Client 5'  },
  { src: '/client6.png',  alt: 'Client 6'  },
  { src: '/client7.png',  alt: 'Client 7'  },
  { src: '/client8.png',  alt: 'Client 8'  },
  { src: '/client9.png',  alt: 'Client 9'  },
  { src: '/client10.png', alt: 'Client 10' },
  { src: '/client11.png', alt: 'Client 11' },
  { src: '/client12.png', alt: 'Client 12' },
];

const OurClients = ({ lang, isAr }) => (
  <div id="about-clients" className="scroll-mt-24 mb-20">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}>🌟</div>
      <h3 className={`text-2xl font-bold text-white ${isAr ? 'font-cairo' : 'font-playfair'}`}>
        {isAr ? 'عملاؤنا المميزون' : 'Our Special Clients'}
      </h3>
      <div className="flex-1 h-px opacity-20" style={{ background: 'linear-gradient(90deg, #23A796, transparent)' }} />
    </div>

    <div className="clients-slider-wrapper relative overflow-hidden rounded-2xl" dir="ltr"
      style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(35,167,150,0.15)', padding: '24px 0' }}>

      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.95), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(10,22,40,0.95), transparent)' }} />

      <div className="clients-track mb-4">
        {[...clients.slice(0, 6), ...clients.slice(0, 6)].map((c, i) => (
          <div key={i} className="flex-shrink-0 mx-5 flex items-center justify-center"
            style={{ width: '140px', height: '90px' }}>
            <img src={c.src} alt={c.alt}
              className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
              style={{ filter: 'grayscale(20%) brightness(0.95)', opacity: 0.9 }}
              onMouseEnter={e => { e.target.style.filter = 'grayscale(0%) brightness(1.15)'; e.target.style.opacity = '1'; }}
              onMouseLeave={e => { e.target.style.filter = 'grayscale(20%) brightness(0.95)'; e.target.style.opacity = '0.9'; }}
              onError={(e) => {
                e.target.parentNode.innerHTML = `<div style="color:rgba(35,167,150,0.35);font-size:11px;text-align:center;width:100%">${c.alt}</div>`;
              }}
            />
          </div>
        ))}
      </div>

      <div className="clients-track-reverse">
        {[...clients.slice(6, 12), ...clients.slice(6, 12)].map((c, i) => (
          <div key={i} className="flex-shrink-0 mx-5 flex items-center justify-center"
            style={{ width: '140px', height: '90px' }}>
            <img src={c.src} alt={c.alt}
              className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
              style={{ filter: 'grayscale(20%) brightness(0.95)', opacity: 0.9 }}
              onMouseEnter={e => { e.target.style.filter = 'grayscale(0%) brightness(1.15)'; e.target.style.opacity = '1'; }}
              onMouseLeave={e => { e.target.style.filter = 'grayscale(20%) brightness(0.95)'; e.target.style.opacity = '0.9'; }}
              onError={(e) => {
                e.target.parentNode.innerHTML = `<div style="color:rgba(35,167,150,0.35);font-size:11px;text-align:center;width:100%">${c.alt}</div>`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurClients;
