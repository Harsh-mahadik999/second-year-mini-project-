import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IntroOverlayProps {
  show: boolean;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ show }) => {
  const words = ['Craft', 'Motion', 'Feeling'];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,hsl(163_84%_37%_/_0.25),transparent_50%)]" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.18
                }
              }
            }}
            className="relative px-6 text-center"
          >
            {words.map((word) => (
              <div key={word} className="overflow-hidden">
                <motion.p
                  variants={{ hidden: { y: '100%' }, show: { y: 0 } }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  className="heading-display text-[2.6rem] font-extrabold leading-[0.95] sm:text-[4.8rem]"
                >
                  {word}
                </motion.p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: 'easeInOut' }}
            className="absolute bottom-24 h-[2px] w-40 origin-left bg-white/70"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
