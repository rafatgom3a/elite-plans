import { useRef, useState, useEffect } from 'react';

const clients = [
  { src: '/client1.png', alt: 'Client 1' },
  { src: '/client2.png', alt: 'Client 2' },
  { src: '/client3.png', alt: 'Client 3' },
  { src: '/client4.png', alt: 'Client 4' },
  { src: '/client5.png', alt: 'Client 5' },
  { src: '/client6.png', alt: 'Client 6' },
  { src: '/client7.png', alt: 'Client 7' },
  { src: '/client8.png', alt: 'Client 8' },
  { src: '/client9.png', alt: 'Client 9' },
  { src: '/client10.png', alt: 'Client 10' },
  { src: '/client11.png', alt: 'Client 11' },
  { src: '/client12.png', alt: 'Client 12' },
  { src: '/client13.png', alt: 'Client 13' },
  { src: '/client14.png', alt: 'Client 14' },
  { src: '/client15.png', alt: 'Client 15' },
  { src: '/client16.png', alt: 'Client 16' },
  { src: '/client17.png', alt: 'Client 17' },
  { src: '/client18.png', alt: 'Client 18' },
  { src: '/client19.png', alt: 'Client 19' },
  { src: '/client20.png', alt: 'Client 20' },
  { src: '/client21.png', alt: 'Client 21' },
  { src: '/client22.png', alt: 'Client 22' },
  { src: '/client23.png', alt: 'Client 23' },
  { src: '/client24.png', alt: 'Client 24' },
  { src: '/client25.png', alt: 'Client 25' },
  { src: '/client26.png', alt: 'Client 26' },
  { src: '/client27.png', alt: 'Client 27' },
  { src: '/client28.png', alt: 'Client 28' },
  { src: '/client29.png', alt: 'Client 29' },
  { src: '/client30.png', alt: 'Client 30' },
  { src: '/client31.png', alt: 'Client 31' },
  { src: '/client32.png', alt: 'Client 32' },
  { src: '/client33.png', alt: 'Client 33' },
  { src: '/client34.png', alt: 'Client 34' },
  { src: '/client35.png', alt: 'Client 35' },
  { src: '/client36.png', alt: 'Client 36' },
  { src: '/client37.png', alt: 'Client 37' },
];

const OurClients = ({ isAr }) => {
  const sliderRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const autoScroll = () => {
      if (!isDown) {
        slider.scrollLeft += 0.5;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animation = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(animation);
  }, [isDown]);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div id="about-clients" className="mb-20">

      <div className="flex items-center gap-4 mb-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}
        >
          🌟
        </div>

        <h3 className={`text-2xl font-bold text-white ${isAr ? 'font-cairo' : ''}`}>
          {isAr ? 'عملاؤنا المميزون' : 'Our Special Clients'}
        </h3>

        <div
          className="flex-1 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, #23A796, transparent)' }}
        />
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing rounded-2xl px-6 py-8"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(35,167,150,0.2)',
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-12">

          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '220px', height: '130px' }} // 🔥 bigger
            >
              <img
                src={c.src}
                alt={c.alt}
                className="w-full h-full object-contain transition duration-300 hover:scale-125"
                style={{
                  filter: 'grayscale(30%)',
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(30%)';
                  e.target.style.opacity = '0.85';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;