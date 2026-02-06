import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f5e8] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
         <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#4a2c2a] mb-12 text-center"
        >
          Say Hello
        </motion.h1>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
             <div className="flex flex-col gap-2">
                <label className="uppercase text-xs font-bold tracking-wider text-[#4a2c2a]">Name</label>
                <input type="text" className="bg-[#f9f5e8] border-none p-4 rounded-xl focus:ring-2 focus:ring-[#d98e46] outline-none text-[#4a2c2a]" placeholder="Jane Doe" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="uppercase text-xs font-bold tracking-wider text-[#4a2c2a]">Email</label>
                <input type="email" className="bg-[#f9f5e8] border-none p-4 rounded-xl focus:ring-2 focus:ring-[#d98e46] outline-none text-[#4a2c2a]" placeholder="jane@example.com" />
             </div>
          </div>
          <div className="flex flex-col gap-2">
             <label className="uppercase text-xs font-bold tracking-wider text-[#4a2c2a]">Message</label>
             <textarea rows={5} className="bg-[#f9f5e8] border-none p-4 rounded-xl focus:ring-2 focus:ring-[#d98e46] outline-none text-[#4a2c2a]" placeholder="Tell us what's on your mind..."></textarea>
          </div>
          <button className="w-full bg-[#4a2c2a] text-[#f9f5e8] py-4 rounded-xl font-display uppercase tracking-wider text-lg hover:bg-[#d98e46] hover:text-[#2b1d1a] transition-colors">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;