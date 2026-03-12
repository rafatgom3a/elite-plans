const serviceWallpapers = {
  1: '/odoo.png',
  2: '/consulting.jpeg',
  3: '/corporate.jpg',
  4: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
  6: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  7: '/administrative.jpg',
  // 7: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
};

const ServiceCard = ({ service, lang, onClick }) => {
  const isAr = lang === 'ar';
  const wallpaper = serviceWallpapers[service.id] || serviceWallpapers[2];

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03]"
      style={{ border: '1px solid rgba(35,167,150,0.18)', background: '#0a1628', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      {/* Wallpaper */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center">
        <img
          src={wallpaper}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #0a1628 100%)' }} />
        <div
          className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl z-10"
          style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)', boxShadow: '0 0 16px rgba(35,167,150,0.5)' }}
        >
          {service.icon}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 pt-3">
        <h3
          className="text-white font-semibold text-base mb-2 leading-snug"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          {service.title}
        </h3>
        <p
          className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          {service.desc}
        </p>
        <div
          className="flex items-center gap-1 text-teal-400 text-xs font-medium group-hover:gap-2 transition-all duration-200"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          <span>{isAr ? 'اعرف المزيد' : 'Learn More'}</span>
          <span className="transition-transform group-hover:translate-x-1">{isAr ? '←' : '→'}</span>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(35,167,150,0.5)' }}
      />
    </div>
  );
};

const Services = ({ t, lang, onOpenDetail }) => {
  return (
    <section id="services" className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #050d15 0%, #0a1628 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`text-sm tracking-widest uppercase text-teal-300 opacity-70 mb-4 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}
            style={{ letterSpacing: lang === 'ar' ? '0.05em' : '0.15em' }}>
            {t.services.sectionTag}
          </div>
          <h2 className={`text-shadow-teal ${lang === 'ar' ? 'font-cairo font-black text-4xl sm:text-5xl' : 'font-playfair font-bold text-4xl sm:text-5xl'}`}
            style={{ color: '#23A796' }}>
            {t.services.title}
          </h2>
          <div className="divider-teal w-24 mx-auto mt-6 opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              lang={lang}
              onClick={() => onOpenDetail({ ...service, wallpaper: serviceWallpapers[service.id] || serviceWallpapers[2] })}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;