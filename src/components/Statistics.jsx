import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  
  // Reset refs array
  statsRefs.current = [];
  
  // Add to refs array
  const addToStatsRefs = (el) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el);
    }
  };

  // Statistics data
  const stats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      value: "32%",
      label: "Average ROI Increase",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    },
    {
      value: "99.9%",
      label: "System Uptime",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      value: "15+",
      label: "Years of Excellence",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  // Counter animation function
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Handle different formats (numbers with + or % signs)
      let currentValue;
      let displayValue;
      
      if (typeof end === 'string') {
        // Extract the numeric part
        const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''));
        const numericStart = parseFloat(start.toString().replace(/[^0-9.]/g, ''));
        currentValue = numericStart + progress * (numericEnd - numericStart);
        
        // Format with the same suffix
        if (end.includes('+')) {
          displayValue = Math.floor(currentValue) + '+';
        } else if (end.includes('%')) {
          displayValue = currentValue.toFixed(1) + '%';
        } else {
          displayValue = Math.floor(currentValue).toString();
        }
      } else {
        currentValue = start + progress * (end - start);
        displayValue = Math.floor(currentValue).toString();
      }
      
      obj.innerHTML = displayValue;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    // GSAP animations for section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Animate stats cards
    tl.fromTo(
      statsRefs.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        ease: "power3.out",
        onComplete: () => {
          // Start counter animations after cards appear
          statsRefs.current.forEach((ref, idx) => {
            const valueEl = ref.querySelector('.stat-value');
            if (valueEl) {
              const stat = stats[idx];
              animateValue(valueEl, 0, stat.value, 1500);
            }
          });
        }
      }
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
      className="py-16 bg-gradient-to-r from-enterpriseBlue via-primary to-deepBlue text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              ref={addToStatsRefs}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-white/10 rounded-full">
                {stat.icon}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-2 stat-value">
                {stat.value}
              </h3>
              
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
      </div>
    </section>
  );
}
