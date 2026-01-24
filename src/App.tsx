import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
        <Reservation />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
