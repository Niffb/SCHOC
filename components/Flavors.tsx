import React from 'react';
import { motion } from 'framer-motion';
import { FLAVORS } from '../constants';

interface FlavorsProps {
  onSelectCategory: (id: string) => void;
}

const Flavors: React.FC<FlavorsProps> = ({ onSelectCategory }) => {
  return (
    <section className="bg-[#5d3a36] py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl text-[#f9f5e8]"
        >
          Shop By <br />
          <span className="inline-block bg-[#d98e46] text-[#2b1d1a] px-4 transform rotate-1 mt-2 shadow-lg">Category</span>
        </motion.h2>
      </div>

      <div className="overflow-x-auto no-scrollbar pb-20 px-6 flex gap-8 snap-x snap-mandatory justify-start md:justify-center">
        {FLAVORS.map((category, index) => (
          <motion.div
            key={category.id}
            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center"
            onClick={() => onSelectCategory(category.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div
              className="relative rounded-t-[10rem] rounded-b-[2rem] overflow-hidden aspect-[3/4] group cursor-pointer shadow-2xl hover:-translate-y-4 transition-transform duration-500"
              style={{ backgroundColor: category.color }}
            >
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 text-center">

                {/* Product Image Mockup */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 mb-4 mt-8 shadow-inner" style={{ borderColor: category.accent }}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col items-center gap-3 mb-8">
                  <h3 className="font-display text-4xl md:text-5xl uppercase leading-none drop-shadow-sm" style={{ color: category.textColor }}>
                    {category.name}
                  </h3>
                  <div className="h-1 w-12 rounded-full" style={{ backgroundColor: category.accent }}></div>
                  <p className="text-sm font-bold opacity-80 max-w-[200px]" style={{ color: category.textColor }}>
                    {category.description}
                  </p>
                </div>

                <div className="mt-auto w-full z-30">
                  <button
                    className="w-full px-6 py-4 font-bold uppercase tracking-wider text-xs transition-colors hover:brightness-110"
                    style={{ backgroundColor: category.accent, color: '#2b1d1a' }}
                  >
                    Shop Collection
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Flavors;