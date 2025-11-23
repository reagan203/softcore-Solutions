import React, { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

export default function FloatingNeon() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particles = [
    { top: "10%", left: "20%", color: isDark ? "rgba(0,150,255,0.16)" : "rgba(0,120,255,0.15)", size: 220 },
    { top: "40%", left: "70%", color: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.10)", size: 300 },
    { top: "65%", left: "35%", color: isDark ? "rgba(0,200,255,0.18)" : "rgba(0,180,255,0.12)", size: 260 },
    { top: "80%", left: "15%", color: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)", size: 180 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Aurora gradient layer (Apple Vision Pro style) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,150,255,0.25), transparent 60%)",
          mixBlendMode: isDark ? "screen" : "normal",
          filter: "blur(120px)",
        }}
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: "50%",
            filter: "blur(60px)",
            willChange: "transform",
          }}
        />
      ))}

      {/* Glass reflection overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255,255,255,0.04), rgba(255,255,255,0))",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
