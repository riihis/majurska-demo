import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.contact.address}
                  </h3>
                  <p className="text-gray-700">{t.contact.addressLine1}</p>
                  <p className="text-gray-700">{t.contact.addressLine2}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.contact.hours}
                  </h3>
                  <p className="text-gray-700">{t.contact.hoursWeekday}</p>
                  <p className="text-gray-700">{t.contact.hoursWeekend}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t.contact.contactInfo}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">{t.contact.phone}</p>
                    <p className="text-gray-800 font-medium">{t.contact.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">{t.contact.email}</p>
                    <p className="text-gray-800 font-medium">{t.contact.emailAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.0123456789!2d28.1875!3d61.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjHCsDAzJzI5LjkiTiAyOMKwMTEnMTUuMCJF!5e0!3m2!1sen!2sfi!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Majurska location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
