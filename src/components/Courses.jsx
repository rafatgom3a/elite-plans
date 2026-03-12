const courseWallpapers = {
  1: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
  2: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  4: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
};

const CourseCard = ({ course, lang, onClick }) => {
  const isAr = lang === 'ar';
  const wallpaper = courseWallpapers[course.id] || courseWallpapers[1];
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03]"
      style={{ border: '1px solid rgba(35,167,150,0.18)', background: '#0d1b2a', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={wallpaper}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, #0d1b2a 100%)' }} />
        <div
          className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)', boxShadow: '0 0 16px rgba(35,167,150,0.5)' }}
        >
          {String(course.id).padStart(2, '0')}
        </div>
        <span
          className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full border border-teal-400/40 text-teal-300"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif', background: 'rgba(10,22,40,0.7)' }}
        >
          {isAr ? 'دورة' : 'Course'}
        </span>
      </div>

      <div className="p-5 pt-3">
        <h3
          className="text-white font-semibold text-base mb-2 leading-snug"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          {course.title}
        </h3>
        <p
          className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          {course.desc}
        </p>
        <div
          className="flex items-center gap-1 text-teal-400 text-xs font-medium group-hover:gap-2 transition-all duration-200"
          style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
        >
          <span>{isAr ? 'عرض المنهج' : 'View Curriculum'}</span>
          <span className="transition-transform group-hover:translate-x-1">{isAr ? '←' : '→'}</span>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(35,167,150,0.5)' }}
      />
    </div>
  );
};

const Courses = ({ t, lang, onOpenDetail }) => {
  return (
    <section id="courses" className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1628 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px divider-teal opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`text-sm tracking-widest uppercase text-teal-300 opacity-70 mb-4 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}
            style={{ letterSpacing: lang === 'ar' ? '0.05em' : '0.15em' }}>
            {t.courses.sectionTag}
          </div>
          <h2 className={`text-shadow-teal mb-4 ${lang === 'ar' ? 'font-cairo font-black text-4xl sm:text-5xl' : 'font-playfair font-bold text-4xl sm:text-5xl'}`}
            style={{ color: '#23A796' }}>
            {t.courses.title}
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${lang === 'ar' ? 'font-cairo text-lg' : 'font-dm'}`}>
            {t.courses.subtitle}
          </p>
          <div className="divider-teal w-24 mx-auto mt-6 opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.courses.items.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              lang={lang}
              onClick={() => onOpenDetail({ ...course, wallpaper: courseWallpapers[course.id] || courseWallpapers[1] })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;