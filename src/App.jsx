import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import CourseDetail from './components/CourseDetail';

const sections = ['home', 'about', 'services', 'courses', 'blog', 'careers', 'contact'];

const detailComponents = {
  service: { Component: ServiceDetail, bg: '#0a1628', prop: 'service' },
  course:  { Component: CourseDetail,  bg: '#0d1b2a', prop: 'course'  },
};

function App() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [detailPage, setDetailPage] = useState(null);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const observerRef = useRef(null);
  const savedScrollRef = useRef(0);
  const savedSectionRef = useRef('home');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3)
            setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const navigateTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openDetail = (type, data) => {
    savedScrollRef.current = window.scrollY;
    savedSectionRef.current = activeSection;
    setDetailPage({ type, data });
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection(null);
  };

  const closeDetail = (scrollTarget = null) => {
    setDetailPage(null);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollTarget?.pos ?? savedScrollRef.current);
      setActiveSection(scrollTarget?.section ?? savedSectionRef.current);
      if (scrollTarget?.id) {
        document.getElementById(scrollTarget.id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  // Close detail and go straight to contact section
  const goToContact = () => closeDetail({ pos: 0, section: 'contact', id: 'contact' });

  const detailConfig = detailPage && detailComponents[detailPage.type];

  return (
    <>
      {/* MAIN PAGE — always mounted, hidden behind detail when open */}
      <div style={{ display: detailPage ? 'none' : 'block' }}>
        <div className="min-h-screen" style={{ background: '#0a1628' }}>
          <Navbar
            t={t} lang={lang}
            toggleLanguage={toggleLanguage}
            activeSection={activeSection}
            onNavigate={navigateTo}
          />
          <Hero     t={t} lang={lang} onNavigate={navigateTo} />
          <About    t={t} lang={lang} onNavigate={navigateTo} />
          <Services t={t} lang={lang} onOpenDetail={(data) => openDetail('service', data)} />
          <Courses  t={t} lang={lang} onOpenDetail={(data) => openDetail('course',  data)} />
          <Blog     t={t} lang={lang} />
          <Careers  t={t} lang={lang} />
          <Contact  t={t} lang={lang} />
          <Footer   t={t} lang={lang} onNavigate={navigateTo} />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/966565282726"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            onMouseEnter={() => setWhatsappHovered(true)}
            onMouseLeave={() => setWhatsappHovered(false)}
            style={{
              position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999,
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #0d4a42, #23A796)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', cursor: 'pointer',
              boxShadow: whatsappHovered ? '0 6px 28px rgba(35,167,150,0.7)' : '0 4px 20px rgba(35,167,150,0.5)',
              transform: whatsappHovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.823 1.787 6.845L2 30l7.351-1.768A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.594l-.418-.248-4.363 1.05 1.084-4.245-.272-.435A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.617c-.345-.172-2.04-1.006-2.355-1.12-.316-.115-.547-.172-.777.172-.23.345-.892 1.12-1.093 1.351-.2.23-.4.258-.746.086-.345-.172-1.457-.537-2.775-1.712-1.025-.914-1.716-2.044-1.917-2.388-.2-.345-.022-.531.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.431-.029-.603-.086-.172-.777-1.873-1.065-2.564-.28-.673-.566-.582-.777-.593l-.661-.011c-.23 0-.603.086-.918.431-.316.345-1.207 1.178-1.207 2.873s1.236 3.333 1.408 3.563c.172.23 2.432 3.712 5.893 5.207.824.355 1.467.568 1.969.727.827.263 1.58.226 2.174.137.663-.1 2.04-.834 2.327-1.638.287-.805.287-1.494.2-1.638-.086-.143-.316-.23-.661-.402z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* DETAIL PAGE — rendered on top when open */}
      {detailConfig && (
        <div className="min-h-screen" style={{ background: detailConfig.bg }}>
          <detailConfig.Component
            {...{ [detailConfig.prop]: detailPage.data }}
            lang={lang}
            onBack={closeDetail}
            onContactUs={goToContact}
          />
        </div>
      )}
    </>
  );
}

export default App;