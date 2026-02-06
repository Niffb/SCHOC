import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

const benefits = [
  "Handmade in Canada",
  "Ethically Sourced",
  "Premium Cocoa",
  "No Artificial Flavors"
];

// Container animation for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual benefit text animation
const itemVariants = {
  hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Benefits: React.FC = () => {
  return (
    <section className="bg-[#4a2c2a] py-32 text-center overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header with slide-up */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-[#d98e46] text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why ShawZ?
          </motion.h3>
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The ShawZ Difference
          </motion.p>
        </motion.div>

        {/* Benefits List with stagger + blur */}
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              variants={itemVariants}
              className="relative group"
            >
              <motion.h2
                className="font-display text-4xl md:text-7xl lg:text-8xl text-[#f9f5e8] cursor-default select-none relative z-10"
                whileHover={{
                  color: "#d98e46",
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover underline effect */}
                <span className="relative">
                  {benefit}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] bg-[#d98e46] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%" }}
                  />
                </span>
              </motion.h2>
            </motion.div>
          ))}

          {/* CTA Button with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 inline-block"
          >
            <motion.button
              className="px-8 py-3 border border-[#d98e46] text-[#d98e46] uppercase tracking-widest relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background fill on hover */}
              <motion.span
                className="absolute inset-0 bg-[#d98e46] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-[#2b1d1a] transition-colors duration-300">
                Read our Manifesto
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;