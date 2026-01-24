import { useLanguage } from '../context/LanguageContext';

export function Menu() {
  const { t } = useLanguage();

  const MenuCategory = ({ title, items }: { title: string; items: Array<{ name: string; price: string }> }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-orange-800 mb-6 border-b-2 border-orange-200 pb-3">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-baseline">
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-gray-300 mx-3 mb-1" />
            <span className="text-orange-700 font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.menu.title}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <MenuCategory title={t.menu.coffee.title} items={t.menu.coffee.items} />
          <MenuCategory title={t.menu.pastries.title} items={t.menu.pastries.items} />
          <MenuCategory title={t.menu.savory.title} items={t.menu.savory.items} />
          <MenuCategory title={t.menu.seasonal.title} items={t.menu.seasonal.items} />
        </div>
      </div>
    </section>
  );
}
