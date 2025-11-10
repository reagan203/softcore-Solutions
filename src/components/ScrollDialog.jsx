/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollDialog = ({ isOpen, onClose, title, message, icon }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto"
        >
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              {icon && (
                <div className="text-2xl flex-shrink-0">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDialog;
