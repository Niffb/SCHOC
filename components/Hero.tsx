import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLORS } from '../constants';

interface HeroProps {
  onShopClick: () => void;
}

// Staggered letter animation for premium text reveal
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedText: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => (
  <span className={className}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i + delay * 10}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const yFloating = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#4a2c2a] text-[#f9f5e8]">

      {/* Floating Background Particles */}
      <motion.div
        style={{ y: yFloating }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <motion.div
          className="absolute top-[20%] right-[15%] w-8 h-8 bg-[#d98e46] rounded-full blur-lg opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[50%] left-[10%] w-4 h-4 bg-[#f9f5e8] rounded-full blur-sm opacity-20"
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[25%] w-6 h-6 bg-[#d98e46] rounded-full blur-md opacity-25"
          animate={{ scale: [1, 1.2, 1], y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] w-3 h-3 bg-[#f9f5e8] rounded-full blur-sm opacity-15"
          animate={{ x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tagline with fade slide */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              className="font-script text-3xl md:text-4xl text-[#d98e46]"
              animate={{
                textShadow: ["0 0 0px #d98e46", "0 0 20px #d98e46", "0 0 0px #d98e46"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Est. Canada
            </motion.span>
          </motion.div>

          {/* Main Title with Staggered Letters */}
          <h1 className="text-[12vw] leading-[0.85] font-display text-[#f9f5e8] drop-shadow-2xl">
            <AnimatedText text="GOURMET" />
            <br />
            <span className="text-[#d98e46]">
              <AnimatedText text="CHOCOLATE" delay={0.8} />
            </span>
          </h1>

          {/* Subtitle with word-by-word reveal */}
          <motion.h2
            className="text-[4vw] font-display text-white/40 tracking-widest mt-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["BARS", "•", "BUTTERS", "•", "BOXES"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description with blur-in effect */}
          <motion.p
            className="mt-8 text-sm md:text-lg max-w-lg mx-auto font-medium text-[#f9f5e8]/80 leading-relaxed"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          >
            Handcrafted in the heart of the Rockies. ShawZ delivers premium, small-batch chocolate sensations that melt your heart and soul.
          </motion.p>

          {/* CTA Button with glow effect */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(217, 142, 70, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onShopClick}
            className="mt-10 px-10 py-4 bg-[#d98e46] text-[#2b1d1a] font-display font-bold uppercase tracking-wider text-lg rounded-sm shadow-xl hover:bg-[#c67d39] transition-colors"
          >
            Shop Categories
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with pulse */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.span
          className="text-xs uppercase tracking-widest text-[#f9f5e8]/40"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f9f5e8]/40 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;