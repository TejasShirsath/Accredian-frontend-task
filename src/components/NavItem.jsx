import React from 'react';
import { motion } from 'framer-motion';

const NavItem = ({ title, active, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
    >
      <span className={active ? 'text-blue-600 font-medium' : ''}>
        {title}
      </span>
      {active && (
        <motion.div
          layoutId="dot"
          className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default NavItem;
