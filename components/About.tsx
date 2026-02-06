import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-8 text-center"
        >
          Our Story
        </motion.h1>
        <div className="prose prose-lg mx-auto text-[#6d4c41]">
          <p className="text-xl leading-relaxed mb-6 font-medium">
            Born in the heart of Calgary, ShawZ Chocolate started with a simple mission: to create chocolate that honors the spirit of the Rockies.
          </p>
          <p className="mb-6">
            We believe that chocolate is more than just a sweet treat—it's a moment of connection. From our ethically sourced cocoa beans to our handcrafted production process, every step is infused with passion and precision.
          </p>
          <p>
            Whether you're enjoying our signature Z-Bars after a hike in Banff or sharing a box of truffles with loved ones, you're tasting the dedication of a team that loves what they do.
          </p>
        </div>
        <div className="mt-12">
           <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop" alt="Chocolate Making" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;