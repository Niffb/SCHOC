import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Basket: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6 flex items-center justify-center">
       <div className="text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-[#eab69f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#4a2c2a]"
          >
             <ShoppingBag size={48} />
          </motion.div>
          <h1 className="font-display text-4xl md:text-5xl text-[#4a2c2a] mb-4">Your Basket is Empty</h1>
          <p className="text-[#6d4c41] mb-8">It looks like you haven't added any sweet treats yet.</p>
          <button className="px-8 py-3 bg-[#4a2c2a] text-[#f9f5e8] rounded-full font-bold uppercase tracking-wider hover:bg-[#d98e46] hover:text-[#2b1d1a] transition-colors">
            Start Shopping
          </button>
       </div>
    </div>
  );
};

export default Basket;