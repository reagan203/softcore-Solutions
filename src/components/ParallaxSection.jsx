/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection({ backgroundImage, text }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const accentsRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="relative h-[60vh] w-full bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark corporate gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75"
      />

      {/* Modern geometric accents (corporate, minimal) */}
      <div
        ref={accentsRef}
        className="absolute inset-0 z-[1] pointer-events-none opacity-30"
      >
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-xl backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-white/10 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Glass Layer Text Container */}
      <div className="relative z-10 w-[90%] md:w-[65%]">
        <div className="backdrop-blur-md bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-2xl p-6 md:p-10 text-center">
          <h2
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white font-cinematic tracking-tight leading-tight"
          >
            {text}
          </h2>

          <div className="mt-4 h-1 w-20 mx-auto bg-white/40 rounded"></div>
        </div>
      </div>
    </div>
  );
}
