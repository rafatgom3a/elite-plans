import { useRef, useState, useEffect } from 'react';
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

const whyUsItems = [
  { icon: '🎯', en: 'Precision & Accuracy',            ar: 'الدقة والضبط',          descEn: 'Every report, analysis, and plan is crafted with meticulous attention to detail.',  descAr: 'كل تقرير وتحليل وخطة تُعدّ بعناية فائقة للتفاصيل.' },
  { icon: '🔒', en: 'Full Confidentiality',            ar: 'سرية تامة',              descEn: 'Your business data is handled with the highest standards of discretion.',           descAr: 'بيانات أعمالك تُعالَج بأعلى معايير السرية والحيطة.' },
  { icon: '📈', en: 'Proven Results',                  ar: 'نتائج مثبتة',            descEn: 'Hundreds of clients have achieved measurable financial growth with our guidance.',   descAr: 'مئات العملاء حققوا نمواً مالياً ملموساً بتوجيهنا.' },
  { icon: '🌍', en: 'Local & International Standards', ar: 'معايير محلية ودولية',     descEn: 'We comply with Saudi regulations and international accounting standards (IFRS).',   descAr: 'نلتزم باللوائح السعودية والمعايير المحاسبية الدولية IFRS.' },
  { icon: '⚡', en: 'Fast Delivery',                   ar: 'سرعة في التسليم',        descEn: 'We meet your deadlines without compromising quality.',                             descAr: 'نلتزم بمواعيدك دون التنازل عن الجودة.' },
  { icon: '🤝', en: 'Long-Term Partnership',           ar: 'شراكة طويلة الأمد',      descEn: 'We build lasting relationships, not just one-time transactions.',                  descAr: 'نبني علاقات مستدامة، لا مجرد معاملات آنية.' },
];

const StatCard = ({ stat, lang, delay }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className="rounded-2xl p-6 text-center"
      style={{
        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(35,167,150,0.18)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}>
      <div className={`font-bold mb-2 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}
        style={{ color: '#3ED4C0', fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
        {stat.value}
      </div>
      <div className={`text-gray-300 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}
        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.4 }}>
        {stat.label}
      </div>
    </div>
  );
};

const WhyUs = ({ t, lang, isAr }) => (
  <>
    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
      {t.about.stats.map((stat, i) => (
        <StatCard key={i} stat={stat} lang={lang} delay={i * 120} />
      ))}
    </div>

    <div className="divider-teal opacity-20 mb-20" />

    {/* Why Us */}
    <div id="about-why" className="scroll-mt-24 mb-20">
      <SectionHeading icon="⭐" label={isAr ? 'لماذا نحن؟' : 'Why Us?'} lang={lang} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyUsItems.map((item, i) => (
          <div key={i} className="glass card-hover rounded-2xl p-6">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className={`text-white font-semibold mb-2 ${isAr ? 'font-cairo' : 'font-dm'}`}>
              {isAr ? item.ar : item.en}
            </h4>
            <p className={`text-gray-400 text-sm leading-relaxed ${isAr ? 'font-cairo text-right' : 'font-dm'}`}>
              {isAr ? item.descAr : item.descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default WhyUs;