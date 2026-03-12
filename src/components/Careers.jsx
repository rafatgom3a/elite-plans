import { useState } from 'react';

const EMPTY_FORM = {
  name: '', dob: '', nationality: '', address: '',
  email: '', phone: '', phone2: '',
  qualification: '', university: '', gradYear: '',
  cert1: '', cert2: '', cert3: '', experience: '',
};

const Careers = ({ t, lang }) => {
  const [open, setOpen]           = useState(false);
  const [form, setForm]           = useState(EMPTY_FORM);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [closeHovered, setCloseHovered] = useState(false);

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
    if (!form.dob.trim())
      e.dob = isAr ? 'تاريخ الميلاد مطلوب' : 'Date of birth is required';
    if (!form.nationality.trim())
      e.nationality = isAr ? 'الجنسية مطلوبة' : 'Nationality is required';
    if (!form.email.trim())
      e.email = isAr ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = isAr ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address';
    if (!form.phone.trim())
      e.phone = isAr ? 'رقم الهاتف مطلوب' : 'Phone is required';
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone))
      e.phone = isAr ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
    if (!form.qualification.trim())
      e.qualification = isAr ? 'المؤهل العلمي مطلوب' : 'Qualification is required';
    if (!form.university.trim())
      e.university = isAr ? 'الجامعة مطلوبة' : 'University is required';
    if (!form.gradYear.trim())
      e.gradYear = isAr ? 'سنة التخرج مطلوبة' : 'Graduation year is required';
    else if (!/^\d{4}$/.test(form.gradYear) || +form.gradYear < 1970 || +form.gradYear > new Date().getFullYear())
      e.gradYear = isAr ? 'سنة غير صحيحة' : 'Invalid year';
    if (!form.experience.trim())
      e.experience = isAr ? 'الخبرة مطلوبة' : 'Experience is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstKey = Object.keys(newErrors)[0];
      document.querySelector(`[name="${firstKey}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
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

  const openModal = () => {
    setOpen(true);
    setSubmitted(false);
    setErrors({});
    setNetworkError(false);
  };

  /* Derived class strings */
  const inputBase = `w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-200 bg-transparent text-sm ${font} ${isAr ? 'text-right' : ''}`;
  const inputCls  = (field) => `${inputBase} ${errors[field] ? 'border border-red-500/60 focus:ring-red-400' : 'focus:ring-teal-400'}`;
  const labelCls  = `block text-sm text-gray-400 mb-1.5 ${font} ${isAr ? 'text-right' : ''}`;
  const errorCls  = `text-xs text-red-400 mt-1 ${font} ${isAr ? 'text-right' : ''}`;

  /* Field config uses t, so defined inside component */
  const fields = [
    { key: 'name',          label: t.careers.form.name,          type: 'text'   },
    { key: 'dob',           label: t.careers.form.dob,           type: 'date'   },
    { key: 'nationality',   label: t.careers.form.nationality,   type: 'text'   },
    { key: 'address',       label: t.careers.form.address,       type: 'text'   },
    { key: 'email',         label: t.careers.form.email,         type: 'email'  },
    { key: 'phone',         label: t.careers.form.phone,         type: 'tel'    },
    { key: 'phone2',        label: t.careers.form.phone2,        type: 'tel'    },
    { key: 'qualification', label: t.careers.form.qualification, type: 'text'   },
    { key: 'university',    label: t.careers.form.university,    type: 'text'   },
    { key: 'gradYear',      label: t.careers.form.gradYear,      type: 'number' },
    { key: 'cert1',         label: t.careers.form.cert1,         type: 'text'   },
    { key: 'cert2',         label: t.careers.form.cert2,         type: 'text'   },
    { key: 'cert3',         label: t.careers.form.cert3,         type: 'text'   },
  ];

  return (
    <>
      <section id="careers" className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1b2a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px divider-teal opacity-20" />
          <div className="absolute bottom-0 left-0 right-0 h-px divider-teal opacity-20" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`text-sm tracking-widest uppercase text-teal-300 opacity-70 mb-4 ${font}`}
            style={{ letterSpacing: isAr ? '0.05em' : '0.15em' }}>
            {t.careers.sectionTag}
          </div>
          <h2 className={`text-shadow-teal mb-4 ${isAr ? 'font-cairo font-black text-4xl sm:text-5xl' : 'font-playfair font-bold text-4xl sm:text-5xl'}`}
            style={{ color: '#23A796' }}>
            {t.careers.title}
          </h2>
          <p className={`text-gray-400 mb-8 ${isAr ? 'font-cairo text-lg' : 'font-dm'}`}>
            {t.careers.subtitle}
          </p>
          <div className="divider-teal w-24 mx-auto mb-10 opacity-60" />
          <button onClick={openModal}
            className={`px-12 py-4 rounded-full font-semibold text-lg cursor-pointer transition-all duration-300 hover:scale-105 ${font}`}
            style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)', color: 'white', boxShadow: '0 8px 32px rgba(35,167,150,0.35)' }}>
            {isAr ? '📋 قدّم طلبك الآن' : '📋 Apply Now'}
          </button>
        </div>
      </section>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(5,13,21,0.96)',
          backdropFilter: 'blur(12px)',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Sticky header */}
          <div style={{
            position: 'sticky', top: 0, zIndex: 10,
            background: 'rgba(10,22,40,0.95)',
            borderBottom: '1px solid rgba(35,167,150,0.2)',
            padding: '16px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #23A796, #3ED4C0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
              }}>📋</div>
              <span className={`text-white font-semibold text-lg ${isAr ? 'font-cairo' : 'font-playfair'}`}>
                {isAr ? 'نموذج التقديم' : 'Application Form'}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              onMouseEnter={() => setCloseHovered(true)}
              onMouseLeave={() => setCloseHovered(false)}
              aria-label="Close"
              style={{
                background: closeHovered ? 'rgba(35,167,150,0.25)' : 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white', borderRadius: '50%',
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >×</button>
          </div>

          {/* Body */}
          <div style={{ maxWidth: '860px', width: '100%', margin: '0 auto', padding: '40px 24px 80px' }}>
            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className={`text-2xl font-semibold text-teal-400 mb-2 ${isAr ? 'font-cairo' : 'font-playfair'}`}>
                  {isAr ? 'تم إرسال الطلب!' : 'Application Submitted!'}
                </h3>
                <p className={`text-gray-400 mb-6 ${font}`}>
                  {isAr ? 'سنراجع طلبك ونتواصل معك قريباً.' : "We'll review your application and get back to you soon."}
                </p>
                <button onClick={() => setOpen(false)}
                  className={`px-8 py-3 rounded-full font-semibold cursor-pointer transition-all duration-200 hover:scale-105 ${font}`}
                  style={{ background: 'linear-gradient(135deg, #23A796, #3ED4C0)', color: 'white' }}>
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-10" noValidate>
                <div className={`text-teal-400 text-sm uppercase tracking-widest mb-6 opacity-70 ${isAr ? 'font-cairo text-right' : 'font-dm'}`}>
                  {isAr ? 'المعلومات الشخصية والمؤهلات' : 'Personal Information & Qualifications'}
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {fields.map(({ key, label, type }) => (
                    <div key={key}>
                      <label className={labelCls}>{label}</label>
                      <input type={type} name={key} value={form[key]}
                        onChange={handleChange} placeholder={label} className={inputCls(key)} />
                      {errors[key] && <p className={errorCls}>⚠ {errors[key]}</p>}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className={labelCls}>{t.careers.form.experience}</label>
                  <textarea name="experience" value={form.experience}
                    onChange={handleChange} rows={5}
                    placeholder={isAr ? 'الشركة، الدور، التواريخ، المهام الرئيسية...' : 'Company, role, dates, key responsibilities...'}
                    className={`${inputCls('experience')} resize-none`} />
                  {errors.experience && <p className={errorCls}>⚠ {errors.experience}</p>}
                </div>

                {Object.keys(errors).length > 2 && (
                  <div className={`mb-4 px-4 py-3 rounded-xl text-sm text-red-300 ${isAr ? 'font-cairo text-right' : 'font-dm'}`}
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    ⚠ {isAr ? 'يرجى تصحيح الأخطاء أعلاه قبل الإرسال' : 'Please fix the errors above before submitting'}
                  </div>
                )}

                {networkError && (
                  <p className={`mb-4 text-sm text-red-400 text-center ${font}`}>
                    {isAr ? '⚠ حدث خطأ، يرجى المحاولة مجدداً.' : '⚠ Something went wrong. Please try again.'}
                  </p>
                )}

                <div style={{ display: 'flex', gap: '12px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                  <button type="submit" disabled={loading}
                    className={`flex-1 py-4 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed ${font}`}
                    style={{
                      background: loading ? 'rgba(35,167,150,0.5)' : 'linear-gradient(135deg, #23A796, #3ED4C0)',
                      color: 'white', boxShadow: '0 6px 24px rgba(35,167,150,0.35)',
                    }}>
                    {loading ? (isAr ? '⏳ جاري الإرسال...' : '⏳ Sending...') : t.careers.form.submit}
                  </button>
                  <button type="button" onClick={() => setOpen(false)}
                    className={`py-4 px-8 rounded-xl font-semibold text-base cursor-pointer text-gray-400 transition-all duration-200 hover:text-white ${font}`}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {isAr ? 'إلغاء' : 'Cancel'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;