import { useState, useEffect, useRef, Fragment } from 'react';

const ActiveUnderline = () => (
  <div className="absolute bottom-0 left-3 right-3 h-0.5 rounded"
    style={{ background: 'linear-gradient(90deg, #23A796, #3ED4C0)' }} />
);

const Chevron = ({ open }) => (
  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


const Navbar = ({ t, lang, toggleLanguage, activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [localActive, setLocalActive] = useState(activeSection);
  const dropdownRef = useRef(null);

  const isAr = lang === 'ar';
  const font = isAr ? 'font-cairo' : 'font-dm';

  useEffect(() => { setLocalActive(activeSection); }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sectionIds = ['home', 'about', 'services', 'courses', 'blog', 'careers', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      if (current) setLocalActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setAboutDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const aboutSubLinks = [
    { key: 'about-who',      label: isAr ? 'من نحن'           : 'Who We Are',          anchor: 'about-who'      },
    { key: 'about-why',      label: isAr ? 'لماذا نحن؟'       : 'Why Us?',             anchor: 'about-why'      },
    { key: 'about-partners', label: isAr ? 'شركاؤنا'          : 'Our Partners',        anchor: 'about-partners' },
    { key: 'about-clients',  label: isAr ? 'عملاؤنا المميزون' : 'Our Special Clients', anchor: 'about-clients'  },
    { key: 'about-vision',   label: isAr ? 'الرؤية والمهمة'   : 'Vision & Mission',    anchor: 'about-vision'   },
  ];

  const navItems = [
    { key: 'home',     label: t.nav.home     },
    { key: 'services', label: t.nav.services },
    { key: 'courses',  label: t.nav.courses  },
    { key: 'blog',     label: t.nav.blog     },
    { key: 'careers',  label: t.nav.careers  },
    { key: 'contact',  label: t.nav.contact  },
  ];

  const aboutLabel = isAr ? 'عن خطط النخبة' : 'About Us';

  const handleNav = (section) => {
    onNavigate(section);
    setMobileOpen(false);
    setAboutDropdownOpen(false);
  };

  const handleSubNav = (anchor) => {
    const el = document.getElementById(anchor) || document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setAboutDropdownOpen(false);
    setMobileOpen(false);
  };

  const isAboutActive = localActive === 'about';
  const isActive = (key) => localActive === key;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'nav-blur shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button onClick={() => handleNav('home')} className="cursor-pointer flex items-center">
            <img src="/logo.png" alt="Elite Plans | خطط النخبة"
              style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <Fragment key={item.key}>
                <button onClick={() => handleNav(item.key)}
                  className={`relative px-3 py-2 text-sm transition-all duration-200 rounded cursor-pointer ${font}
                    ${isActive(item.key) ? 'text-[#23A796]' : 'text-[#C9D1D9] hover:text-white'}`}>
                  {item.label}
                  {isActive(item.key) && <ActiveUnderline />}
                </button>

                {/* About dropdown — injected right after Home */}
                {i === 0 && (
                  <div className="relative" ref={dropdownRef}>
                    <button onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-all duration-200 rounded cursor-pointer ${font}
                        ${isAboutActive ? 'text-[#23A796]' : 'text-[#C9D1D9] hover:text-white'}`}>
                      <span>{aboutLabel}</span>
                      <Chevron open={aboutDropdownOpen} />
                      {isAboutActive && <ActiveUnderline />}
                    </button>

                    {aboutDropdownOpen && (
                      <div className={`absolute top-full mt-2 w-56 rounded-xl overflow-hidden shadow-2xl z-50 ${isAr ? 'right-0' : 'left-0'}`}
                        style={{ background: 'rgba(7,20,32,0.97)', border: '1px solid rgba(35,167,150,0.35)', backdropFilter: 'blur(20px)' }}>
                        {aboutSubLinks.map((sub, j) => (
                          <button key={sub.key} onClick={() => handleSubNav(sub.anchor)}
                            className={`w-full text-sm py-3.5 px-5 transition-all duration-150 cursor-pointer
                              flex items-center gap-3 group ${font}
                              ${isAr ? 'flex-row-reverse text-right' : 'text-left'}
                              ${j < aboutSubLinks.length - 1 ? 'border-b border-[#23A796]/20' : ''}
                              text-[#C9D1D9] hover:text-white hover:bg-[#23A796]/10`}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-150 group-hover:scale-150"
                              style={{ background: '#23A796', opacity: 0.8 }} />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <button onClick={toggleLanguage}
              className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-[#7FE3D5] hover:text-[#23A796] transition-all duration-200 cursor-pointer">
              <span>{isAr ? '🇬🇧' : '🇸🇦'}</span>
              <span className={font}>{isAr ? 'English' : 'عربي'}</span>
            </button>

            {/* CTA */}
            <button onClick={() => handleNav('contact')}
              className="hidden lg:block px-5 py-2 rounded-full text-sm cursor-pointer text-white"
              style={{ background: '#23A796' }}>
              {t.nav.bookNow}
            </button>

            {/* Hamburger */}
            <button className="lg:hidden text-white p-2 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden rounded-xl mb-4 overflow-hidden" style={{ background: '#071420' }}>
            {navItems.map((item, i) => (
              <Fragment key={item.key}>
                <button onClick={() => handleNav(item.key)}
                  className={`w-full px-6 py-3 text-sm border-b border-white/5 transition-colors cursor-pointer
                    ${font} ${isAr ? 'text-right' : ''}
                    ${isActive(item.key) ? 'text-[#23A796] bg-[#23A796]/10' : 'text-[#C9D1D9] hover:text-white hover:bg-white/5'}`}>
                  {item.label}
                </button>

                {/* About accordion — injected right after Home */}
                {i === 0 && (
                  <div>
                    <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className={`w-full px-6 py-3 text-sm border-b border-white/5 transition-colors cursor-pointer
                        flex items-center justify-between ${font} ${isAr ? 'flex-row-reverse' : ''}
                        ${isAboutActive ? 'text-[#23A796] bg-[#23A796]/10' : 'text-[#C9D1D9] hover:text-white hover:bg-white/5'}`}>
                      <span>{aboutLabel}</span>
                      <Chevron open={mobileAboutOpen} />
                    </button>
                    {mobileAboutOpen && (
                      <div style={{ background: 'rgba(35,167,150,0.05)' }}>
                        {aboutSubLinks.map((sub) => (
                          <button key={sub.key} onClick={() => handleSubNav(sub.anchor)}
                            className={`w-full px-10 py-2.5 text-sm border-b border-white/5 transition-colors cursor-pointer
                              flex items-center gap-2 ${font}
                              ${isAr ? 'flex-row-reverse text-right' : 'text-left'}
                              text-[#7FE3D5] hover:text-white hover:bg-white/5`}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#23A796' }} />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            ))}

            <div className="px-6 py-4">
              <button onClick={() => handleNav('contact')}
                className="w-full py-2.5 rounded-full text-sm cursor-pointer text-white"
                style={{ background: '#23A796' }}>
                {t.nav.bookNow}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;