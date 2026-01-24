import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/image.png"
          alt="Majurska Café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all font-semibold shadow-lg hover:shadow-xl text-lg"
            >
              {t.hero.exploreMenu}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/95 text-gray-800 px-8 py-3 rounded-full hover:bg-white transition-all font-semibold shadow-lg hover:shadow-xl text-lg"
            >
              {t.hero.visitUs}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
