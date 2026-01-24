import { useLanguage } from '../context/LanguageContext';
import { Coffee } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Coffee className="w-8 h-8 text-orange-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6">
              {t.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Café interior"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-200 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
