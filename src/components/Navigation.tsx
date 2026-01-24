import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-orange-800 hover:text-orange-700 transition-colors"
          >
            Majurska
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-700 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-700 transition-colors font-medium"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-orange-700 transition-colors font-medium"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-700 transition-colors font-medium"
            >
              {t.nav.visit}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'fi' ? 'en' : 'fi')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {language === 'fi' ? 'EN' : 'FI'}
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              {t.nav.reserve}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
