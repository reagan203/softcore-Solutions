import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductShowcase({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imagePosition = "right" // "left" or "right"
}) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Create GSAP animations for this component
    // Initial setup - hide elements
    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
    gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonRef.current, { opacity: 0, y: 20 });
    gsap.set(imageRef.current, { 
      opacity: 0, 
      x: imagePosition === "right" ? 50 : -50,
    });
    gsap.set(bgRef.current, { opacity: 0 });
    
    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center 50%",
        toggleActions: "play none none reverse",
      }
    });
    
    // Add animations to timeline
    tl.to(bgRef.current, { opacity: 1, duration: 0.5 })
      .to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.3")
      .to(subtitleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.5")
      .to(descriptionRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.5")
      .to(buttonRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")
      .to(imageRef.current, { 
        opacity: 1, 
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

    // Create a separate ScrollTrigger for subtle parallax effect
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        // Subtle parallax effect
        const direction = imagePosition === "right" ? -1 : 1;
        gsap.to(imageRef.current, {
          x: direction * self.progress * 20,
          duration: 0.5,
          ease: "none"
        });
      }
    });
    
    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [imagePosition]);

  return (
    <div
      ref={sectionRef}
      className={`min-h-[60vh] w-full flex items-center py-[5%] px-[3%] overflow-hidden relative ${imagePosition === "right" ? "bg-bgPrimary" : "bg-bgSection"}`}
    >
      {/* Background with subtle gradient */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-0"
      ></div>
      
      <div className={`w-[95%] mx-auto flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-[3%] z-10`}>
        <div className="w-full md:w-1/2 space-y-4 p-[2%]">
          <h2 
            ref={titleRef} 
            className="text-4xl md:text-5xl font-bold text-primary font-cinematic tracking-tight"
            style={{ whiteSpace: 'normal', display: 'block', lineHeight: '1.2' }}
          >
            {title}
          </h2>
          
          <h3 
            ref={subtitleRef} 
            className="text-2xl md:text-3xl font-semibold text-secondary"
          >
            {subtitle}
          </h3>
          
          <p 
            ref={descriptionRef} 
            className="text-lg md:text-xl leading-relaxed text-textSecondary"
          >
            {description}
          </p>
          
          <button 
            ref={buttonRef} 
            className="px-6 py-3 bg-primary text-white font-bold rounded-lg transition-all mt-6 btn-hover"
          >
            <span className="relative z-10 flex items-center">Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>
        </div>
        
        <div 
          ref={imageRef} 
          className="w-full md:w-1/2 p-[2%] transform"
        >
          <img 
            src={imageSrc || "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"} 
            alt={title} 
            className="rounded-lg shadow-lg w-full h-auto object-cover img-hover-scale"
            style={{
              boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              maxHeight: '400px'
            }}
            data-animate="fade-in"
          />
        </div>
      </div>
    </div>
  );
}
