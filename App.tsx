import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Flavors from './components/Flavors';
import Nutrition from './components/Nutrition';
import Benefits from './components/Benefits';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';
import ProductPage from './components/ProductPage';
import About from './components/About';
import Delivery from './components/Delivery';
import StoreLocator from './components/StoreLocator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Basket from './components/Basket';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      setCurrentPage(null);
      window.scrollTo(0, 0);
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleShopClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'delivery':
        return <Delivery />;
      case 'locator':
        return <StoreLocator />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'basket':
        return <Basket />;
      case 'bars-cups':
      case 'coconut-butter':
      case 'gift-boxes':
        return <ProductPage categoryId={currentPage} onBack={() => handleNavigate('home')} />;
      default:
        return (
          <>
            <Hero onShopClick={handleShopClick} />
            <Manifesto />
            <div ref={categoriesRef}>
              <Flavors onSelectCategory={handleNavigate} />
            </div>
            <Nutrition />
            <Benefits />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#4a2c2a] text-[#2b1d1a] selection:bg-[#d98e46] selection:text-[#2b1d1a]">
      <NoiseOverlay />

      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      <main>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;