import React, { useState, useEffect } from 'react';
import { User, Menu, ShoppingBag, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { COLORS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHome = currentPage === null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Delivery Options', value: 'delivery' },
    { label: 'Store Locator', value: 'locator' },
    { label: 'Testimonials', value: 'testimonials' },
    { label: 'Contact', value: 'contact' },
    { label: 'Basket', value: 'basket' },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300 ${isScrolled || !isHome ? 'bg-[#2b1d1a]/95 backdrop-blur-md shadow-lg' : ''}`}
        style={{ color: COLORS.cream }}
      >
        <div 
          className="flex items-center gap-2 cursor-pointer select-none group"
          onClick={() => onNavigate('home')}
        >
          <div className="font-display text-3xl tracking-tighter text-[#d98e46] border-2 border-[#d98e46] w-10 h-10 flex items-center justify-center rounded-lg bg-[#2b1d1a] group-hover:bg-[#d98e46] group-hover:text-[#2b1d1a] transition-colors">
            Z
          </div>
          <div className="text-2xl font-display tracking-wide text-[#f9f5e8]">
            ShawZ
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 font-semibold text-xs tracking-wider uppercase text-[#f9f5e8]">
          {navLinks.map((link) => (
             link.value === 'basket' ? (
                <button 
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className="p-2 rounded-full border border-[#f9f5e8] hover:bg-[#f9f5e8]/10 transition-colors relative flex items-center gap-2 px-4"
                >
                  <span>Basket</span>
                  <ShoppingBag size={16} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d98e46] text-[#2b1d1a] text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
                </button>
             ) : (
                <button 
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`hover:text-[#d98e46] transition-colors ${currentPage === link.value ? 'text-[#d98e46]' : ''}`}
                >
                  {link.label}
                </button>
             )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
           <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-[60] bg-[#4a2c2a] text-[#f9f5e8] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-display text-3xl">Menu</span>
               <button onClick={() => setIsMobileMenuOpen(false)}>
                 <X size={32} />
               </button>
            </div>
            <div className="flex flex-col gap-8 text-xl font-display uppercase tracking-wider">
               {navLinks.map((link) => (
                  <button 
                    key={link.value}
                    onClick={() => {
                      onNavigate(link.value);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-[#d98e46]"
                  >
                    {link.label}
                  </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;