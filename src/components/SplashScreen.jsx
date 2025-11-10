import React, { useEffect, useState } from 'react';
/* eslint-disable no-unused-vars */

import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showScreen, setShowScreen] = useState(true);
  
  useEffect(() => {
    // Simulate loading progress with longer duration
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 6 + 1.5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowScreen(false);
            setTimeout(() => {
              onComplete && onComplete();
            }, 500);
          }, 1500); // Increased delay before fade out
          return 100;
        }
        return newProgress;
      });
    }, 200); // Increased interval between progress updates
    
    return () => clearInterval(interval);
  }, [onComplete]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" } 
    }
  };

  // Logo animation
  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 100 }
    }
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };
  
  return (
    <AnimatePresence>
      {showScreen && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0047ab 0%, #1a3a52 50%, #0a1f2e 100%)',
            }}
          />

          {/* Animated blobs */}
          <motion.div 
            className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="flex items-center gap-6"
              >
                <div className="w-28 h-28 bg-gradient-to-br from-white to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">S</span>
                </div>
                <div>
                  <motion.h1 
                    className="text-5xl md:text-7xl font-bold text-white font-cinematic leading-tight"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Softcore
                  </motion.h1>
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-blue-200 font-cinematic"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.15 }}
                  >
                    Solutions
                  </motion.h2>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
