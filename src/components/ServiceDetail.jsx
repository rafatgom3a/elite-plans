const ServiceDetail = ({ service, lang, onBack, onContactUs }) => {
  const isAr = lang === 'ar';

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #050d15 0%, #0a1628 100%)' }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Hero Banner */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={service.wallpaper}
          alt={service.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(5,13,21,0.2) 0%, rgba(5,13,21,0.85) 100%)' }} />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-teal-300 hover:text-white transition-colors group"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          <span className="w-9 h-9 rounded-full border border-teal-400/40 flex items-center justify-center
            group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-all text-sm">
            {isAr ? '→' : '←'}
          </span>
          <span className="text-sm font-medium">{isAr ? 'رجوع' : 'Back'}</span>
        </button>

        {/* Icon + Title */}
        <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)', boxShadow: '0 0 32px rgba(35,167,150,0.4)' }}
            >
              {service.icon}
            </div>
            <h1
              className="text-white font-bold text-2xl sm:text-4xl leading-tight"
              style={{
                fontFamily: isAr ? 'Cairo, sans-serif' : 'Playfair Display, serif',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}
            >
              {service.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-14">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: text */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}>
              {service.desc}
            </p>

            <div>
              <div
                className="text-xs uppercase tracking-widest text-teal-300 mb-5 opacity-80"
                style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif', letterSpacing: isAr ? '0.05em' : '0.15em' }}
              >
                {isAr ? 'ما يشمله' : "What's Included"}
              </div>
              <ul className="space-y-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3"
                    style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}>
                    <span
                      className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-gray-300 leading-relaxed text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactUs}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #23A796, #3ED4C0)',
                  boxShadow: '0 0 24px rgba(35,167,150,0.35)',
                  fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                }}
              >
                {isAr ? 'تواصل معنا' : 'Get in Touch'}
              </button>
            </div>
          </div>

          {/* Right: image — hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center sticky top-24"
              style={{
                border: '1px solid rgba(35,167,150,0.2)',
                boxShadow: '0 0 40px rgba(35,167,150,0.1)',
                minHeight: '260px',
              }}
            >
              <img
                src={service.wallpaper}
                alt={service.title}
                className="w-full h-64 lg:h-80 object-cover"
                style={{ filter: 'brightness(0.85)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;