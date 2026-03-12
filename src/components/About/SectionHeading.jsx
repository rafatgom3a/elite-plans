const SectionHeading = ({ icon, label, lang }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}>
      {icon}
    </div>
    <h3 className={`text-2xl font-bold text-white ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
      {label}
    </h3>
    <div className="flex-1 h-px opacity-20"
      style={{ background: 'linear-gradient(90deg, #23A796, transparent)' }} />
  </div>
);

export default SectionHeading;
