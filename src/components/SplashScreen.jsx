import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const UltraSplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showScreen, setShowScreen] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Mouse tracking for interactive highlights
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5 + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            controls.start({ opacity: 0, scale: 0.8 });
            setTimeout(() => {
              setShowScreen(false);
              onComplete && onComplete();
            }, 500);
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [onComplete, controls]);

  // Floating neon blobs
  const blobs = [
    { size: 200, top: "10%", left: "15%", color: "#00c6ff", delay: 0 },
    { size: 300, top: "60%", left: "70%", color: "#0072ff", delay: 2 },
    { size: 180, top: "30%", left: "50%", color: "#00ffe0", delay: 1 },
  ];

  // Neon particles trailing the logo
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    size: Math.random() * 6 + 2,
    color: `hsl(${Math.random() * 200 + 180}, 100%, 50%)`,
  }));

  return (
    <AnimatePresence>
      {showScreen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0047ab 0%, #1a3a52 50%, #0a1f2e 100%)",
            }}
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Interactive Neon Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                top: mousePos.y + p.y,
                left: mousePos.x + p.x,
                pointerEvents: "none",
                opacity: 0.6,
                filter: "blur(4px)",
              }}
              animate={{
                x: [0, Math.random() * 20 - 10, 0],
                y: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Floating Neon Blobs */}
          {blobs.map((b, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              style={{ width: b.size, height: b.size, top: b.top, left: b.left, background: b.color }}
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 8 + idx * 2, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
            />
          ))}

          {/* Logo & Glowing Text */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-6 relative"
            >
              {/* Logo */}
              <div className="w-28 h-28 bg-gradient-to-br from-white to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_10px_#00c6ff]">
                  S
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white font-cinematic leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ textShadow: "0 0 20px #00c6ff, 0 0 40px #0072ff" }}
                >
                  Softcore
                </motion.h1>
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-blue-200 font-cinematic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                  style={{ textShadow: "0 0 15px #00ffe0, 0 0 30px #0072ff" }}
                >
                  Solutions
                </motion.h2>
              </div>
            </motion.div>

            {/* Circular Progress */}
            <div className="relative mt-8">
              <svg className="w-20 h-20">
                <circle cx="40" cy="40" r="36" stroke="#ffffff40" strokeWidth="8" fill="none" />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="url(#grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 36}
                  strokeDashoffset={2 * Math.PI * 36 * (1 - progress / 100)}
                  animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - progress / 100) }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#0072ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltraSplashScreen;
