import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { PRODUCTS_DATA, COLORS } from '../constants';

interface ProductPageProps {
  categoryId: string;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ categoryId, onBack }) => {
  const data = PRODUCTS_DATA[categoryId];

  if (!data) return <div>Category not found</div>;

  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-24 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#4a2c2a] hover:text-[#d98e46] transition-colors mb-8 font-bold uppercase tracking-wider text-sm"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-6">
            {data.title}
          </h1>
          <p className="text-[#6d4c41] text-lg font-medium leading-relaxed">
            {data.description}
          </p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#eab69f]/20"
            >
              <div className="relative aspect-square overflow-hidden bg-[#2b1d1a]/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#4a2c2a]">
                   In Stock
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-3xl text-[#2b1d1a] uppercase">
                    {item.name}
                  </h3>
                  <span className="font-script text-2xl text-[#d98e46]">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-[#6d4c41] mb-8 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <button className="w-full py-4 bg-[#2b1d1a] text-[#f9f5e8] font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-[#d98e46] hover:text-[#2b1d1a] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                  <ShoppingBag size={16} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;