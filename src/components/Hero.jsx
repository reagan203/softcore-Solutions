import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const companyNameRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollHintRef = useRef(null);
  const shapesRef = useRef([]);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const clientsRef = useRef(null);
  const featureCardsRef = useRef([]);

  // Reset refs arrays
  shapesRef.current = [];
  featureCardsRef.current = [];

  // Add to refs arrays
  const addToShapesRefs = (el) => {
    if (el && !shapesRef.current.includes(el)) {
      shapesRef.current.push(el);
    }
  };

  const addToFeatureCardsRefs = (el) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };


  // Feature cards data
  const featureCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Enterprise-Grade",
      description: "Built for multi-million dollar businesses"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "High Performance",
      description: "Optimized for speed and reliability"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      title: "Cloud-Based",
      description: "Access your data from anywhere"
    }
  ];


  useEffect(() => {
    // GSAP animations for hero section
    const mainTl = gsap.timeline();
    
    // Background animation
    mainTl.fromTo(
      bgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    )
    
    // Animate shapes
    .fromTo(
      shapesRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      { 
        opacity: 0.8, 
        scale: 1, 
        y: 0,
        duration: 1.2, 
        stagger: 0.2,
        ease: "back.out(1.7)" 
      },
      "-=1"
    )
    
    // Company name animation
    .fromTo(
      companyNameRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    )
    
    // Title animation
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      },
      "-=0.3"
    )
    
    // Subtitle animation
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.5"
    )
    
    // Button animation
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power3.out"
      },
      "-=0.3"
    )
    
    // Scroll hint animation
    .fromTo(
      scrollHintRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.2"
    )
    
    // Image animation
    .fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    
    // Stats animation
    .fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    
    // Clients animation
    .fromTo(
      clientsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    
    // Feature cards animation
    .fromTo(
      featureCardsRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        ease: "power3.out" 
      },
      "-=0.5"
    );
    

    // Scroll-based animations
    // Content moves up and fades out
    gsap.to(contentRef.current, {
      y: 100,
      opacity: 0,
      ease: "power2.in",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "center top",
        scrub: 0.5
      }
    });

    // Shapes parallax effect
    gsap.to(shapesRef.current, {
      y: (i) => i % 2 === 0 ? -30 : -50,
      opacity: 0.3,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Continuous scroll hint animation
    gsap.to(scrollHintRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut"
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Title animation will be applied to the whole element
  
  return (
    <div>
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        {/* Background gradient */}
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-gradient-animate z-0"
        ></div>
        
        {/* Background shapes */}
        <div className="absolute inset-0 z-0">
          <div 
            ref={addToShapesRefs}
            className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"
          ></div>
          <div 
            ref={addToShapesRefs}
            className="absolute bottom-10 right-10 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"
          ></div>
          <div 
            ref={addToShapesRefs}
            className="absolute top-1/3 right-1/4 w-40 h-40 bg-highlight opacity-10 rounded-full blur-3xl"
          ></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left content */}
            <div 
              ref={contentRef}
              className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            >
              {/* Company name */}
              <h2 
                ref={companyNameRef} 
                className="text-2xl md:text-3xl font-medium text-primary mb-2 tracking-wider text-highlight"
                data-animate="fade-in"
              >
                Softcore Software Solutions
              </h2>
              
              {/* Main title */}
              <h1 
                ref={titleRef} 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-deepBlue font-cinematic tracking-tight relative z-10"
                style={{
                  display: 'block',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
                data-animate="slide-up"
              >
                SOFTCORE <br className="hidden md:block" /> SOLUTIONS
              </h1>
              
              {/* Subtitle */}
              <p 
                ref={subtitleRef}
                className="mt-6 text-xl md:text-2xl text-textSecondary max-w-3xl"
                data-animate="slide-up"
              >
                Transforming multi-million dollar businesses with powerful software solutions
              </p>
              
              {/* CTA Button */}
              <button
                ref={buttonRef}
                className="mt-8 px-10 py-5 bg-enterpriseBlue text-white font-bold rounded-lg text-lg transition-all hover:scale-105 btn-hover relative overflow-hidden tooltip tooltip-bottom"
                data-animate="slide-up"
              >
                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                
                {/* Button text */}
                <span className="relative z-10 flex items-center justify-center">
                  <span>Schedule a Demo</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                
                {/* Tooltip content */}
                <div className="tooltip-content">
                  <h4 className="font-bold mb-2">Schedule a Personalized Demo</h4>
                  <p>Get a customized walkthrough of our enterprise solutions tailored to your business needs.</p>
                </div>
              </button>
              
              {/* Feature cards */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {featureCards.map((card, idx) => (
                  <div 
                    key={idx}
                    ref={addToFeatureCardsRefs}
                    className="bg-enterpriseBlue bg-opacity-90 p-4 rounded-lg text-center tooltip tooltip-top"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-white text-opacity-80">{card.description}</p>
                    </div>
                    
                    {/* Tooltip content */}
                    <div className="tooltip-content">
                      <h4 className="font-bold mb-2">{card.title}</h4>
                      <p>Our {card.title.toLowerCase()} solutions are designed specifically for enterprise needs, ensuring reliability and performance at scale.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right content - image and stats */}
            <div ref={imageRef} className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Enterprise Solutions" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                data-animate="fade-in"
              />
              
              {/* Stats overlay */}
              <div 
                ref={statsRef}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl text-left"
              >
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm text-textSecondary">Success Rate</p>
                    <p className="text-3xl font-bold text-enterpriseBlue">99.8%</p>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Client Retention</p>
                    <p className="text-3xl font-bold text-enterpriseBlue">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        >
          <span className="text-sm text-textSecondary mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-textSecondary rounded-full animate-scrollBounce"></div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}
