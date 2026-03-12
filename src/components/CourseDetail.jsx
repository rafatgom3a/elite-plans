const CourseDetail = ({ course, lang, onBack, onContactUs }) => {
  const isAr = lang === 'ar';

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1628 100%)' }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Hero Banner */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={course.wallpaper}
          alt={course.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,27,42,0.2) 0%, rgba(13,27,42,0.9) 100%)' }}
        />

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

        {/* Badge + Title */}
        <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #23A796, #3ED4C0)',
                boxShadow: '0 0 24px rgba(35,167,150,0.4)',
              }}
            >
              {String(course.id).padStart(2, '0')}
            </div>
            <span
              className="text-xs px-3 py-1 rounded-full border border-teal-400/40 text-teal-300"
              style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
            >
              {isAr ? 'دورة تدريبية' : 'Training Course'}
            </span>
          </div>
          <h1
            className="text-white font-bold text-2xl sm:text-4xl leading-tight"
            style={{
              fontFamily: isAr ? 'Cairo, sans-serif' : 'Playfair Display, serif',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            {course.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-14">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: content */}
          <div className="lg:col-span-3 space-y-8">
            <p
              className="text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
            >
              {course.desc}
            </p>

            <div>
              <div
                className="text-xs uppercase tracking-widest text-teal-300 mb-5 opacity-80"
                style={{
                  fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                  letterSpacing: isAr ? '0.05em' : '0.15em',
                }}
              >
                {isAr ? 'محتوى الدورة' : 'Course Curriculum'}
              </div>

              <ul className="space-y-4">
                {course.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'DM Sans, sans-serif' }}
                  >
                    <span
                      className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-gray-300 leading-relaxed text-base">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
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
                {isAr ? 'سجّل الآن' : 'Enroll Now'}
              </button>
            </div>
          </div>

          {/* Right: image — hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden sticky top-24"
              style={{
                border: '1px solid rgba(35,167,150,0.2)',
                boxShadow: '0 0 40px rgba(35,167,150,0.1)',
              }}
            >
              <img
                src={course.wallpaper}
                alt={course.title}
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

export default CourseDetail;