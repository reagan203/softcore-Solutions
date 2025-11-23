import React, { useRef, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tooltip from "./Tooltip";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection({ title, description, imgUrl, reverse }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: reverse ? 50 : -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, rotation: reverse ? -5 : 5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [reverse]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200`}
    >
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 max-w-xl"
      >
        <Tooltip content="Hover to learn more about this feature" position="right">
          <h3 className="text-3xl md:text-4xl font-semibold mb-3 text-[#003366] tracking-tight font-cinematic cursor-help">
            {title}
          </h3>
        </Tooltip>

        <div className="h-1 w-16 bg-[#003366] rounded-md mb-5"></div>

        <p className="text-gray-700 text-lg leading-relaxed md:leading-8">
          {description}
        </p>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:w-1/2 rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-200 bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-72 object-cover rounded-xl transition-all duration-500"
        />
      </motion.div>
    </div>
  );
}
