import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Word-by-word animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedLine: React.FC<{ text: string; startDelay?: number; className?: string }> = ({
  text,
  startDelay = 0,
  className = ""
}) => {
  const words = text.split(' ');
  return (
    <span className={`block mb-2 ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i + startDelay}
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="inline-block mr-[0.3em]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#2b1d1a] text-[#f9f5e8] overflow-hidden">

      {/* Parallax background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWY1ZTgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight uppercase">

          <AnimatedLine text="Unwrap the" startDelay={0} />
          <AnimatedLine text="Magic of YYC" startDelay={2} />

          {/* Highlighted Badge */}
          <div className="relative inline-block my-4">
            <motion.span
              className="relative z-10 px-6 py-2 bg-[#d98e46] text-[#2b1d1a] inline-block shadow-lg"
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: -2, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                bounce: 0.4,
                delay: 0.4,
                duration: 0.8
              }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(217, 142, 70, 0.4)"
              }}
            >
              Pure Indulgence
            </motion.span>
          </div>

          <AnimatedLine text="Made with Passion" startDelay={6} className="text-white/50" />
          <AnimatedLine text="In Every Single" startDelay={9} />

          {/* Final word with special glow effect */}
          <motion.span
            className="block text-[#d98e46]"
            initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px #d98e46",
                  "0 0 30px #d98e46",
                  "0 0 0px #d98e46"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Bite
            </motion.span>
          </motion.span>
        </div>

        {/* Description with typewriter-style reveal */}
        <motion.p
          className="mt-12 text-lg md:text-xl max-w-2xl mx-auto text-white/80 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          From Canada with love to your tastebuds. We blend traditional techniques with Canadian spirit to create chocolate that isn't just candy—it's an experience.
        </motion.p>
      </div>
    </section>
  );
};

export default Manifesto;