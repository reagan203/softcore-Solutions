import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection({ backgroundImage, text }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const shapesRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  
  // Generate decorative shapes for the background
  useEffect(() => {
    const newShapes = [];
    const count = 5;
    
    for (let i = 0; i < count; i++) {
      newShapes.push({
        id: i,
        x: 10 + Math.random() * 80, // Keep within 10-90% of width
        y: 10 + Math.random() * 80, // Keep within 10-90% of height
        size: 5 + Math.random() * 15,
        opacity: 0.05 + Math.random() * 0.1
      });
    }
    
    setShapes(newShapes);
  }, []);

  useEffect(() => {
    // Subtle parallax effect
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 40%",
      },
      {
        backgroundPosition: "50% 60%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Text animation with timeline
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center 50%",
        toggleActions: "play none none reverse",
      }
    });
    
    // Set initial state
    gsap.set(textRef.current, { 
      opacity: 0,
      y: 30,
    });
    
    // Animate text
    textTl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Overlay fade in
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
    
    // Animate shapes
    if (shapesRef.current) {
      const shapeElements = shapesRef.current.querySelectorAll('.shape');
      
      shapeElements.forEach((shape, index) => {
        // Subtle floating animation
        gsap.to(shape, {
          y: `-=${5 + Math.random() * 10}`,
          x: `${Math.random() > 0.5 ? '+=' : '-='}${Math.random() * 10}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 1
        });
        
        // Parallax effect on shapes
        gsap.to(shape, {
          y: `-=${20 + index * 5}`,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[50vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay with gradient */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-primary/80"
      ></div>
      
      {/* Decorative shapes */}
      <div 
        ref={shapesRef}
        className="absolute inset-0 z-[1] overflow-hidden"
      >
        {shapes.map(shape => (
          <div 
            key={shape.id}
            className="shape absolute rounded-full bg-white"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}%`,
              height: `${shape.size}%`,
              opacity: shape.opacity,
              filter: 'blur(30px)'
            }}
          ></div>
        ))}
      </div>
      
      {/* Main text with animation */}
      <div className="relative z-10 w-[90%] md:w-[70%] p-[5%]">
        <h2 
          ref={textRef}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center font-cinematic tracking-wide"
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
