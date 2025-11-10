import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "EnterpriseERP transformed our operations across 15 global locations. The implementation was smooth, and the ROI has exceeded our expectations by 40%.",
      author: "Sarah Johnson",
      position: "CIO, Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      logo: "https://via.placeholder.com/100x40/0052CC/FFFFFF?text=GMC"
    },
    {
      quote: "The hotel management suite has revolutionized how we operate our chain of luxury hotels. Guest satisfaction is up 28% and operational costs are down 22%.",
      author: "Michael Chen",
      position: "COO, Prestige Hotels & Resorts",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      logo: "https://via.placeholder.com/100x40/0052CC/FFFFFF?text=PHR"
    },
    {
      quote: "Their POS system integrated seamlessly with our existing infrastructure. We've seen a 35% increase in transaction speed and improved inventory accuracy.",
      author: "Emily Rodriguez",
      position: "VP of Operations, RetailMax",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      logo: "https://via.placeholder.com/100x40/0052CC/FFFFFF?text=RMax"
    },
    {
      quote: "The business intelligence tools have given us insights we never had before. We've been able to identify new market opportunities worth $15M annually.",
      author: "David Wilson",
      position: "CEO, Innovate Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      logo: "https://via.placeholder.com/100x40/0052CC/FFFFFF?text=IS"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    
    // Animate testimonials
    .fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
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
      className="py-16 bg-lightBlue relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-4xl font-bold text-deepBlue font-cinematic mb-4">
            What Our <span className="heading-highlight">Clients</span> Say
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </div>
        
        <div ref={testimonialsRef} className="relative">
          {/* Testimonial cards */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-lightBlue">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-deepBlue">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-textSecondary mb-3">{testimonials[activeIndex].position}</p>
                  <img 
                    src={testimonials[activeIndex].logo} 
                    alt="Company logo" 
                    className="h-8 object-contain"
                  />
                </div>
                
                <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                  <svg className="w-10 h-10 text-enterpriseBlue opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <motion.p 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-textPrimary italic mb-6"
                  >
                    "{testimonials[activeIndex].quote}"
                  </motion.p>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeIndex ? 'bg-enterpriseBlue scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-enterpriseBlue opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent opacity-5 rounded-full"></div>
        </div>
        
        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-textSecondary mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={`https://via.placeholder.com/120x40/0052CC/FFFFFF?text=Client${i}`} 
                  alt={`Client ${i}`} 
                  className="h-8 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
