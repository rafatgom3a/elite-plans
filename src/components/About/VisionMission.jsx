import SectionHeading from './SectionHeading';

const rows = [
  {
    icon: '🔭', tKey: 'visionLabel',  textKey: 'vision',
    img: 'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vision — blue eye',
  },
  {
    icon: '🎯', tKey: 'missionLabel', textKey: 'mission',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80',
    alt: 'Mission — team collaboration',
  },
];

const VisionMission = ({ t, lang, isAr, onNavigate }) => (
  <div id="about-vision" className="scroll-mt-24">
    <SectionHeading icon="🔭" label={isAr ? 'الرؤية والمهمة' : 'Vision & Mission'} lang={lang} />

    <div className="flex flex-col gap-8">
      {rows.map((row, i) => (
        <div key={i} className="glass rounded-2xl overflow-hidden flex flex-col sm:flex-row"
          style={{
            borderLeft: !isAr ? '3px solid #23A796' : 'none',
            borderRight: isAr ? '3px solid #23A796' : 'none',
            minHeight: '260px',
          }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px', flexShrink: 0, minHeight: '220px', order: isAr ? 1 : 0 }}>
            <img src={row.img} alt={row.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to ${isAr ? 'left' : 'right'}, transparent 60%, rgba(10,22,40,0.85) 100%)`,
            }} />
          </div>
          <div className="flex flex-col justify-center p-8 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{row.icon}</span>
              <h4 className={`text-teal-400 font-semibold text-xl ${isAr ? 'font-cairo' : 'font-dm'}`}>
                {t.about[row.tKey]}
              </h4>
            </div>
            <p className={`text-gray-300 leading-relaxed text-base ${isAr ? 'font-cairo text-right' : 'font-dm'}`}>
              {t.about[row.textKey]}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <button onClick={() => onNavigate('contact')}
        className={`btn-teal px-10 py-3.5 rounded-full font-semibold cursor-pointer ${isAr ? 'font-cairo' : 'font-dm'}`}
        style={{ background: '#23A796', color: 'white' }}>
        {t.about.cta}
      </button>
    </div>
  </div>
);

export default VisionMission;
