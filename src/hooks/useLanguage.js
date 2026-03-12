import { useState, useEffect } from 'react';
import translations from '../data/translations';

export const useLanguage = () => {
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
    document.body.style.fontFamily = lang === 'ar'
      ? "'Cairo', sans-serif"
      : "'DM Sans', sans-serif";
  }, [lang, t]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return { lang, t, toggleLanguage };
};