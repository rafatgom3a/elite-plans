import { useEffect, useState } from "react";

const Hero = ({ t, lang, onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const isAr = lang === "ar";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center sm:items-end overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.gif"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              110deg,
              rgba(10,35,50,0.75) 0%,
              rgba(20,90,100,0.70) 45%,
              rgba(35,167,150,0.65) 100%
            )`,
          }}
        />

        {/* bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #050d15)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 sm:pb-24 sm:pt-0">
        <div
          className={`max-w-3xl ${
            isAr ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >
          {/* TITLE */}
          <h1
            className={`mb-6 leading-tight transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${
              isAr
                ? "font-cairo font-black text-5xl sm:text-7xl lg:text-8xl"
                : "font-playfair font-bold text-5xl sm:text-7xl lg:text-8xl"
            }`}
          >
            <span className="text-white">{t.hero.title}</span>
          </h1>

          {/* SUBTITLE */}
          <h2
            className={`mb-8 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${
              isAr
                ? "font-cairo font-semibold text-2xl sm:text-4xl"
                : "font-playfair text-xl sm:text-3xl"
            }`}
            style={{ color: "#23A796" }}
          >
            {t.hero.subtitle}
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`text-gray-200 mb-10 leading-relaxed transition-all duration-700 delay-200 whitespace-nowrap overflow-hidden text-ellipsis ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${
              isAr
                ? "font-cairo text-xl sm:text-3xl sm:text-4xl"
                : "font-dm text-lg sm:text-2xl sm:text-4xl"
            }`}
          >
            {t.hero.description}
          </p>

          {/* BUTTONS */}
          <div
            className={`flex gap-3 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${isAr ? "flex-row-reverse" : "flex-row"}`}
          >
            <button
              onClick={() => onNavigate("services")}
              className="flex-1 sm:flex-none px-6 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg text-white whitespace-nowrap"
              style={{ background: "#23A796" }}
            >
              {t.hero.cta1}
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="flex-1 sm:flex-none px-6 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg border border-white text-white hover:bg-white hover:text-black transition whitespace-nowrap"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;