import { useState } from 'react';

const EMPTY_FORM = { name: '', email: '', phone: '', country: '', region: '', message: '' };

const Contact = ({ t, lang }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const isAr = lang === 'ar';
  const font = isAr ? 'font-cairo' : 'font-dm';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())
      e.name = isAr ? 'الاسم مطلوب' : 'Name is required';

    if (!form.email.trim())
      e.email = isAr ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = isAr ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address';

    if (!form.phone.trim())
      e.phone = isAr ? 'رقم الهاتف مطلوب' : 'Phone is required';
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone))
      e.phone = isAr ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';

    if (!form.message.trim())
      e.message = isAr ? 'الرسالة مطلوبة' : 'Message is required';
    else if (form.message.trim().length < 10)
      e.message = isAr ? 'الرسالة قصيرة جداً' : 'Message is too short';

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setLoading(true);
    setNetworkError(false);
    try {
      const response = await fetch('https://formspree.io/f/maqpylld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm(EMPTY_FORM);
        setErrors({});
      } else {
        setNetworkError(true);
      }
    } catch {
      setNetworkError(true);
    } finally {
      setLoading(false);
    }
  };

  /* Derived class strings */
  const inputBase = `w-full glass rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-200 bg-transparent text-sm ${font} ${isAr ? 'text-right' : ''}`;
  const inputCls  = (field) => `${inputBase} ${errors[field] ? 'border border-red-500/60 focus:ring-red-400' : 'focus:ring-teal-400'}`;
  const labelCls  = `block text-sm text-gray-400 mb-1.5 ${font} ${isAr ? 'text-right' : ''}`;
  const errorCls  = `text-xs text-red-400 mt-1 ${font} ${isAr ? 'text-right' : ''}`;

  const infoItems = [
    { icon: '✉️', label: isAr ? 'البريد الإلكتروني' : 'Email',    value: t.contact.info.email    },
    { icon: '📞', label: isAr ? 'الهاتف'            : 'Phone',    value: t.contact.info.phone    },
    { icon: '📍', label: isAr ? 'الموقع'            : 'Location', value: t.contact.info.location },
  ];

  return (
    <section id="contact" className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1b2a 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-20" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #23A796 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`text-sm tracking-widest uppercase text-teal-300 opacity-70 mb-4 ${font}`}
            style={{ letterSpacing: isAr ? '0.05em' : '0.15em' }}>
            {t.contact.sectionTag}
          </div>
          <h2 className={`text-shadow-teal mb-4 ${isAr ? 'font-cairo font-black text-4xl sm:text-5xl' : 'font-playfair font-bold text-4xl sm:text-5xl'}`}
            style={{ color: '#23A796' }}>
            {t.contact.title}
          </h2>
          <p className={`text-gray-400 max-w-xl mx-auto ${isAr ? 'font-cairo text-lg' : 'font-dm'}`}>
            {t.contact.subtitle}
          </p>
          <div className="divider-teal w-24 mx-auto mt-6 opacity-60" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {infoItems.map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)' }}>
                  {item.icon}
                </div>
                <div>
                  <div className={`text-xs text-gray-500 uppercase tracking-wide mb-1 ${font}`}>{item.label}</div>
                  <div className={`text-white font-medium ${font}`}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="glass rounded-xl p-5 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.05), rgba(37,211,102,0.02))' }}>
              <div className="text-3xl mb-2">💬</div>
              <div className={`text-sm text-gray-300 mb-3 ${font}`}>
                {isAr ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
              </div>
              <a href="https://wa.me/966565282726" target="_blank" rel="noopener noreferrer"
                className={`inline-block px-6 py-2 rounded-full text-sm font-semibold text-white cursor-pointer ${font}`}
                style={{ background: '#128c7e' }}>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className={`text-2xl font-semibold text-teal-400 mb-2 ${isAr ? 'font-cairo' : 'font-playfair'}`}>
                  {isAr ? 'تم الإرسال!' : 'Message Sent!'}
                </h3>
                <p className={`text-gray-400 ${font}`}>
                  {isAr ? 'سنتواصل معك في أقرب وقت.' : "We'll get back to you as soon as possible."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name',    type: 'text',  label: t.contact.form.name  },
                    { name: 'email',   type: 'email', label: t.contact.form.email },
                    { name: 'phone',   type: 'tel',   label: t.contact.form.phone },
                    { name: 'country', type: 'text',  label: t.contact.form.country },
                  ].map(({ name, type, label }) => (
                    <div key={name}>
                      <label className={labelCls}>{label}</label>
                      <input type={type} name={name} value={form[name]}
                        onChange={handleChange} placeholder={label} className={inputCls(name)} />
                      {errors[name] && <p className={errorCls}>⚠ {errors[name]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className={labelCls}>{t.contact.form.region}</label>
                  <input type="text" name="region" value={form.region}
                    onChange={handleChange} placeholder={t.contact.form.region} className={inputCls('region')} />
                </div>

                <div>
                  <label className={labelCls}>{t.contact.form.message}</label>
                  <textarea name="message" value={form.message}
                    onChange={handleChange} rows={5} placeholder={t.contact.form.message}
                    className={`${inputCls('message')} resize-none`} />
                  {errors.message && <p className={errorCls}>⚠ {errors.message}</p>}
                </div>

                {networkError && (
                  <p className={`text-sm text-red-400 text-center ${font}`}>
                    {isAr ? '⚠ حدث خطأ، يرجى المحاولة مجدداً.' : '⚠ Something went wrong. Please try again.'}
                  </p>
                )}

                <button type="submit" disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed ${font}`}
                  style={{
                    background: loading ? 'rgba(35,167,150,0.5)' : 'linear-gradient(135deg, #23A796, #3ED4C0)',
                    color: 'white',
                    boxShadow: '0 6px 24px rgba(35,167,150,0.35)',
                  }}>
                  {loading ? (isAr ? '⏳ جاري الإرسال...' : '⏳ Sending...') : t.contact.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;