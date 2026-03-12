const blogColors = [
  'from-teal-900/30', 'from-cyan-900/30', 'from-sky-900/30',
  'from-blue-900/30', 'from-indigo-900/30', 'from-purple-900/30',
];

const Blog = ({ t, lang }) => {
  return (
    <section id="blog" className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1628 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`text-sm tracking-widest uppercase text-teal-300 opacity-70 mb-4 ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}
            style={{ letterSpacing: lang === 'ar' ? '0.05em' : '0.15em' }}>
            {t.blog.sectionTag}
          </div>
          <h2 className={`text-shadow-teal
            ${lang === 'ar'
              ? 'font-cairo font-black text-4xl sm:text-5xl'
              : 'font-playfair font-bold text-4xl sm:text-5xl'}`}
            style={{ color: '#23A796' }}>
            {t.blog.title}
          </h2>
          <div className="divider-teal w-24 mx-auto mt-6 opacity-60" />
        </div>

        {/* Blog category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.blog.categories.map((category, i) => (
            <div
              key={i}
              className={`glass card-hover rounded-xl p-5 cursor-pointer group bg-gradient-to-br ${blogColors[i % blogColors.length]} to-transparent`}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                  style={{ background: 'rgba(35,167,150,0.15)', border: '1px solid rgba(35,167,150,0.3)' }}>
                  <span className="text-teal-300">✦</span>
                </div>
                <div className="flex-1">
                  <h3 className={`text-gray-200 text-sm leading-snug group-hover:text-white transition-colors
                    ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
                    {category}
                  </h3>
                  <div className={`mt-2 text-xs text-teal-400/50 group-hover:text-teal-400 transition-colors
                    ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="text-center mt-12">
          <div className="glass inline-block px-8 py-4 rounded-full">
            <p className={`text-gray-400 text-sm ${lang === 'ar' ? 'font-cairo' : 'font-dm'}`}>
              {lang === 'en'
                ? '📚 Articles and insights coming soon — Stay tuned!'
                : '📚 المقالات والرؤى قادمة قريباً — ترقبوا!'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;