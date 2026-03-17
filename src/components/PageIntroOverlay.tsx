import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageIntroOverlayProps {
  title: string;
  subtitle: string;
  show?: boolean;
}

export default function PageIntroOverlay({ title, subtitle, show = true }: PageIntroOverlayProps) {
  const [displayShow, setDisplayShow] = useState(show);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setDisplayShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const titleWords = title.split(' ');
  const subtitleWords = subtitle.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '110%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const underlineVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {displayShow && (
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Title */}
            <motion.div
              className="mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                    style={{ overflow: 'hidden', display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6"
                style={{ width: '80%', maxWidth: '400px', originX: 0.5 }}
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="text-center mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.08,
                delayChildren: 0.5,
              }}
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {subtitleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="text-xl md:text-2xl text-foreground/70 font-light"
                    style={{ overflow: 'hidden', display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="flex justify-center gap-2 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
