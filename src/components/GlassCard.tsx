import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`glass-panel relative overflow-hidden rounded-xl p-6 transition-all duration-300 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-orange-50/20" />
      {children}
    </motion.div>
  );
};

export default GlassCard;