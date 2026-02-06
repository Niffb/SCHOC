import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const links = [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Wholesale", href: "#" },
  ];

  return (
    <footer className="bg-[#1f1513] text-[#f9f5e8] py-20 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        {/* Giant Brand Name with reveal */}
        <motion.div
          className="font-display text-[12vw] leading-none text-[#f9f5e8] select-none tracking-tighter overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {"SHAWZ".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 0.25, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm uppercase tracking-widest opacity-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ opacity: 1 }}
            className="transition-opacity"
          >
            © 2026 ShawZ Chocolate. Canada.
          </motion.div>

          <div className="flex gap-8 mt-4 md:mt-0">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="group-hover:text-[#d98e46] transition-colors duration-300">
                  {link.label}
                </span>
                {/* Underline animation */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d98e46] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;