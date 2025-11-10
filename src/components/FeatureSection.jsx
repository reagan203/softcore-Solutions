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

    // Animate text from left/right
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

    // Animate image with scale and rotation
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [reverse]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 py-12 px-4 md:px-8 bg-white border-b border-gray-100`}
    >
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 max-w-lg"
      >
        <Tooltip content="Hover to learn more about this feature" position="right">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary font-cinematic cursor-help">
            {title}
          </h3>
        </Tooltip>
        <p className="text-textSecondary text-base md:text-lg leading-relaxed">{description}</p>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:w-1/2 rounded-lg overflow-hidden shadow-md"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0, 71, 171, 0.3)" }}
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-lg transition-all duration-500"
        />
      </motion.div>
    </div>
  );
}
