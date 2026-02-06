import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#5d3a36] py-20 flex justify-center items-center pb-40">
       
       <motion.div 
         className="relative group cursor-pointer"
         onClick={() => setIsOpen(true)}
         whileHover={{ scale: 1.1 }}
       >
         <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#d98e46] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1621255755141-8f5ae8885b0d?q=80&w=800&auto=format&fit=crop" 
              alt="Making Chocolate" 
              className="w-full h-full object-cover filter sepia group-hover:sepia-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <Play size={48} fill="#d98e46" className="text-[#d98e46] opacity-80" />
            </div>
         </div>
         
         {/* Rotating Text Ring */}
         <div className="absolute inset-0 -m-4 md:-m-8 animation-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
               <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
               <text className="text-[10px] uppercase font-bold tracking-widest fill-[#f9f5e8]">
                  <textPath href="#circlePath" startOffset="0%">
                     Watch Process • Watch Process • Watch Process • Watch Process •
                  </textPath>
               </text>
            </svg>
         </div>
       </motion.div>

       <AnimatePresence>
         {isOpen && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
           >
             <button 
               onClick={() => setIsOpen(false)} 
               className="absolute top-8 right-8 text-white hover:text-[#d98e46] transition-colors"
             >
               <X size={32} />
             </button>
             
             <motion.div 
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.5, opacity: 0 }}
               className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
             >
                {/* Placeholder Video */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="ShawZ Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
};

export default VideoSection;