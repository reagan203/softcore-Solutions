import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function HotelManagement() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);

  // Reset refs array
  featureRefs.current = [];

  // Add to refs array
  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  // Features list
  const features = [
    "Reservation Management",
    "Guest Services Portal",
    "Room Management",
    "Staff Scheduling",
    "Billing & Invoicing",
    "Analytics Dashboard"
  ];

  useEffect(() => {
    // GSAP animations for section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    
    // Animate content
    .fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    
    // Animate image
    .fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    
    // Animate features
    .fromTo(
      featureRefs.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1,
        ease: "power3.out" 
      },
      "-=0.4"
    );

    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="md:w-1/2">
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-deepBlue font-cinematic"
            >
              Hotel Management Suite
            </h2>
            
            <div ref={contentRef}>
              <p className="text-lg text-textSecondary mb-8">
                Our comprehensive hotel management system streamlines operations for properties of all sizes. From boutique hotels to international chains, our solution provides the tools needed to deliver exceptional guest experiences while optimizing operational efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    ref={addToFeatureRefs}
                    className="flex items-center"
                  >
                    <svg className="w-5 h-5 text-enterpriseBlue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-enterpriseBlue text-white font-semibold rounded-lg transition-all hover:shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
          </div>
          
          {/* Image */}
          <div 
            ref={imageRef}
            className="md:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" 
                alt="Hotel Management System" 
                className="rounded-lg shadow-xl w-full"
              />
              
              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lightBlue rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Average Efficiency Increase</p>
                    <p className="text-2xl font-bold text-deepBlue">+35%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lightBlue opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-tr-full"></div>
    </section>
  );
}
