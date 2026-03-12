import { useEffect, useState } from "react";

const Hero = ({ t, lang, onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24">
        <div
          className={`max-w-3xl ${
            lang === "ar" ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >
          {/* TITLE */}
          <h1
            className={`mb-6 leading-tight transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${
              lang === "ar"
                ? "font-cairo font-black text-6xl sm:text-7xl lg:text-8xl"
                : "font-playfair font-bold text-6xl sm:text-7xl lg:text-8xl"
            }`}
          >
            <span className="text-white">{t.hero.title}</span>
          </h1>

          {/* SUBTITLE */}
          <h2
            className={`mb-8 transition-all duration-700 delay-150 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${
              lang === "ar"
                ? "font-cairo font-semibold text-3xl sm:text-4xl"
                : "font-playfair text-2xl sm:text-3xl"
            }`}
            style={{ color: "#23A796" }}
          >
            {t.hero.subtitle}
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`text-gray-200 mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${
              lang === "ar"
                ? "font-cairo text-3xl sm:text-4xl"
                : "font-dm text-2xl sm:text-4xl"
            }`}
          >
            {t.hero.description}
          </p>

          {/* BUTTONS */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => onNavigate("services")}
              className="px-10 py-4 rounded-full font-semibold text-lg text-white"
              style={{ background: "#23A796" }}
            >
              {t.hero.cta1}
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="px-10 py-4 rounded-full font-semibold text-lg border border-white text-white hover:bg-white hover:text-black transition"
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