import React from 'react';
import { motion } from 'framer-motion';
import { NUTRITION_STATS, COLORS } from '../constants';

// Staggered container for stats
const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Animated counter component
const AnimatedValue: React.FC<{ value: string }> = ({ value }) => (
  <motion.div
    className="font-display text-3xl md:text-4xl text-[#4a2c2a]"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.1, color: "#d98e46" }}
  >
    {value}
  </motion.div>
);

const Nutrition: React.FC = () => {
  return (
    <section className="relative bg-[#f9f5e8] py-20 overflow-hidden">

      {/* Wave effect at top */}
      <div className="absolute top-0 left-0 w-full text-[#5d3a36] transform -translate-y-[1px] rotate-180 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9f5e8" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Text - Split word animation */}
          <div className="lg:w-1/3 z-20 text-center lg:text-left">
            <motion.h2
              className="font-display text-6xl md:text-8xl text-[#4a2c2a] leading-none mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {["CRAFTED", "WITH", "LOVE", "IN YYC"].map((word, i) => (
                <motion.span
                  key={word}
                  className={`block ${word === "LOVE" ? "text-[#d98e46]" : ""}`}
                  variants={{
                    hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    },
                  }}
                >
                  {word === "LOVE" ? (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        textShadow: [
                          "0 0 0px #d98e46",
                          "0 0 20px #d98e46",
                          "0 0 0px #d98e46"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ) : word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Center Visual - Animated circles */}
          <div className="lg:w-1/3 relative h-[500px] w-full flex items-center justify-center">
            <motion.div
              className="w-48 h-48 bg-[#d98e46]/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="absolute w-32 h-32 bg-[#4a2c2a]/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{
                rotate: 360,
                x: [0, 10, 0],
                y: [0, -10, 0]
              }}
              // @ts-ignore - animate has its own transition
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            {/* Additional decorative circle */}
            <motion.div
              className="absolute w-20 h-20 border-2 border-[#d98e46]/30 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              animate={{ scale: [1, 1.2, 1] }}
              // @ts-ignore
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Right Text / Description */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.p
              className="text-[#4a2c2a] text-lg font-medium leading-relaxed bg-[#d98e46]/10 p-8 rounded-2xl border border-[#d98e46]/20"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(217, 142, 70, 0.15)"
              }}
            >
              We source the finest ethically traded cocoa beans to create smooth, rich chocolate that represents the spirit of Canada. No fillers, just pure joy in every bar and cup.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20 border-t-2 border-[#4a2c2a]/10 pt-10"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {NUTRITION_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statItemVariants}
              className="text-center group cursor-default"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-sm uppercase tracking-widest text-[#4a2c2a]/60 mb-2 group-hover:text-[#d98e46] transition-colors"
              >
                {stat.label}
              </motion.div>
              <AnimatedValue value={stat.value} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Nutrition;