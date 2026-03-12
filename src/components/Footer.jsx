const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafek-hashem-4081071a4/',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/eliteplansps',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/eliteplansps',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/eliteplansps',
    color: '#E4405F',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const Footer = ({ t, lang, onNavigate }) => {
  const links = [
    { key: 'services', label: t.footer.links.services },
    { key: 'courses', label: t.footer.links.courses },
    { key: 'blog', label: t.footer.links.blog },
    { key: 'careers', label: t.footer.links.careers },
    { key: 'contact', label: t.footer.links.contact },
  ];

  return (
    <footer className="relative pt-16 pb-8"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #050d15 100%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Elite Plans | خطط النخبة"
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p className={`text-gray-500 text-sm leading-relaxed max-w-xs mb-6 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
              {t.footer.tagline}
            </p>

            {/* Social Media Icons */}
            <div>
              <p className={`text-gray-500 text-xs uppercase tracking-widest mb-3 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
                {lang === 'en' ? 'Follow Us' : 'تابعنا'}
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="group relative"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(35,167,150,0.15)',
                        color: '#9ca3af',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = social.gradient || social.color;
                        e.currentTarget.style.color = social.name === 'X (Twitter)' || social.name === 'TikTok' ? '#ffffff' : '#ffffff';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.boxShadow = `0 4px 15px ${social.color}55`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = '#9ca3af';
                        e.currentTarget.style.borderColor = 'rgba(35,167,150,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {social.icon}
                    </div>
                    <span
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 font-dm"
                      style={{ background: 'rgba(5,13,21,0.95)', border: '1px solid rgba(35,167,150,0.2)', fontSize: '11px' }}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-white font-semibold mb-4 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
              {lang === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate(link.key)}
                    className={`text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className={`text-white font-semibold mb-4 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
              {lang === 'en' ? 'Contact' : 'تواصل'}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className={lang === 'ar' ? 'font-cairo' : 'font-dm'}>
                <div className="text-xs mb-0.5" style={{ color: 'rgba(35,167,150,0.7)' }}>
                  {lang === 'en' ? 'Email' : 'البريد'}
                </div>
                info@epfps.com
              </div>
              <div className={lang === 'ar' ? 'font-cairo' : 'font-dm'}>
                <div className="text-xs mb-0.5" style={{ color: 'rgba(35,167,150,0.7)' }}>
                  {lang === 'en' ? 'Location' : 'الموقع'}
                </div>
                {lang === 'en' ? 'Saudi Arabia' : 'المملكة العربية السعودية'}
              </div>
            </div>
          </div>
        </div>

        <div className="divider-teal opacity-20 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-gray-500 text-xs ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
            {t.footer.rights}
          </p>
          {/* Social icons row — repeated small in bottom bar */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="text-gray-600 hover:text-gray-300 transition-colors"
                style={{ lineHeight: 0 }}
              >
                <div style={{ width: 14, height: 14 }}>
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;