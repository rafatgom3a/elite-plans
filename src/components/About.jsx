import WhoWeAre      from './about/WhoWeAre';
import WhyUs         from './About/WhyUs';
import OurPartners   from './about/OurPartners';
import OurClients    from './about/OurClients';
import VisionMission from './about/VisionMission';

const About = ({ t, lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #050d15 0%, #0a1628 50%, #0d1b2a 100%)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
        <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-30" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #23A796 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px divider-teal opacity-30" />
      </div>

      {/* Section title */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-4 ${isAr ? 'font-cairo' : 'font-dm'}`}>
          <span className="text-sm tracking-widest uppercase text-teal-300 opacity-70"
            style={{ letterSpacing: isAr ? '0.05em' : '0.15em' }}>
            {t.about.discover}
          </span>
        </div>
        <h2 className={`text-center mb-16 text-shadow-teal
          ${isAr
            ? 'font-cairo font-black text-4xl sm:text-5xl lg:text-6xl'
            : 'font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl'}`}
          style={{ color: '#23A796' }}>
          {t.about.title}
        </h2>

        {/* Who We Are + Parallax Banner */}
        <WhoWeAre t={t} lang={lang} isAr={isAr} />
      </div>

      {/* Everything after the parallax banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        <WhyUs t={t} lang={lang} isAr={isAr} />

        <div className="divider-teal opacity-20 mb-20" />

        <OurPartners lang={lang} isAr={isAr} />

        <div className="divider-teal opacity-20 mb-20" />

        <OurClients lang={lang} isAr={isAr} />

        <div className="divider-teal opacity-20 mb-20" />

        <VisionMission t={t} lang={lang} isAr={isAr} onNavigate={onNavigate} />

      </div>
    </section>
  );
};

export default About;