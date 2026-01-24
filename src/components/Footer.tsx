import { Coffee, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-orange-500" />
            <span className="text-2xl font-bold">Majurska</span>
          </div>
          <p className="text-gray-400 text-center max-w-md">
            Lämmin kahvila historiallisessa Lappeenrannan Linnoituksessa
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>in Lappeenranta</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Majurska. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
