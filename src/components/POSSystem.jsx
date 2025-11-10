import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function POSSystem() {
  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageGridRef = useRef(null);
  const featuresRef = useRef(null);
  const featureItemsRef = useRef([]);
  const screenshotRefs = useRef([]);
  const statsRef = useRef(null);
  const statItemsRef = useRef([]);
  const ctaRef = useRef(null);

  // Reset refs arrays
  featureItemsRef.current = [];
  screenshotRefs.current = [];
  statItemsRef.current = [];

  // Add to refs arrays
  const addToFeatureRefs = (el) => {
    if (el && !featureItemsRef.current.includes(el)) {
      featureItemsRef.current.push(el);
    }
  };

  const addToScreenshotRefs = (el) => {
    if (el && !screenshotRefs.current.includes(el)) {
      screenshotRefs.current.push(el);
    }
  };

  const addToStatRefs = (el) => {
    if (el && !statItemsRef.current.includes(el)) {
      statItemsRef.current.push(el);
    }
  };

  // POS Features
  const posFeatures = [
    {
      title: "Intuitive Interface",
      description: "User-friendly touchscreen interface that requires minimal training for staff",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      tooltip: "Our intuitive interface reduces training time by 75% and increases transaction speed by 35% compared to traditional POS systems."
    },
    {
      title: "Real-time Inventory",
      description: "Automatic inventory updates with each sale and smart reordering suggestions",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      ),
      tooltip: "Our real-time inventory management reduces stockouts by 82% and overstocking by 35%, optimizing your inventory capital."
    },
    {
      title: "Multi-location Support",
      description: "Centralized management for multiple stores with location-specific reporting",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      tooltip: "Manage up to 500 locations from a single dashboard with location-specific analytics and inventory management."
    },
    {
      title: "Advanced Analytics",
      description: "Detailed sales reports, customer insights, and business performance metrics",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      tooltip: "Our AI-powered analytics provide insights that have helped businesses increase profit margins by an average of 18%."
    },
    {
      title: "Integrated Payments",
      description: "Support for all payment methods with secure, PCI-compliant processing",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      ),
      tooltip: "Accept over 150 payment methods with 99.99% uptime and the industry's lowest transaction fees at just 1.8% + $0.15 per transaction."
    },
    {
      title: "Customer Management",
      description: "Built-in CRM with loyalty programs, purchase history, and personalized marketing",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      tooltip: "Our CRM system increases customer retention by 28% and boosts repeat purchase frequency by 42% through personalized loyalty programs."
    },
    {
      title: "Mobile Access",
      description: "Manage your business from anywhere with secure mobile apps for iOS and Android",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      tooltip: "Access real-time sales data, manage inventory, and view analytics from anywhere with our mobile app that works even with limited connectivity."
    },
    {
      title: "Customizable Workflows",
      description: "Tailor the system to your specific business needs with customizable workflows",
      icon: (
        <svg className="w-8 h-8 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      tooltip: "Create up to 200 custom workflows with our visual workflow builder, no coding required. Businesses report 45% efficiency improvements after customization."
    }
  ];

  // POS Screenshots with more reliable image paths
  const screenshots = [
    {
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Main Dashboard",
      description: "Comprehensive overview of sales, inventory, and customer data"
    },
    {
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sales Interface",
      description: "Fast, intuitive checkout process with customizable options"
    },
    {
      image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Inventory Management",
      description: "Real-time tracking and automated reordering"
    },
    {
      image: "https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Analytics Platform",
      description: "Detailed reports and visualizations for data-driven decisions"
    }
  ];

  // POS Stats
  const posStats = [
    { value: "35%", label: "Faster Checkout" },
    { value: "42%", label: "Inventory Accuracy" },
    { value: "28%", label: "Revenue Increase" },
    { value: "65%", label: "Time Saved" }
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
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate heading
    mainTl.fromTo(
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
    
    // Animate image grid
    .fromTo(
      imageGridRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Animate features section
    const featuresTl = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate feature items
    featuresTl.fromTo(
      featureItemsRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1,
        ease: "power3.out" 
      }
    );

    // Animate screenshots
    const screenshotsTl = gsap.timeline({
      scrollTrigger: {
        trigger: screenshotRefs.current[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    screenshotsTl.fromTo(
      screenshotRefs.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.7, 
        stagger: 0.2,
        ease: "power3.out" 
      }
    );

    // Animate stats section
    const statsTl = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    statsTl.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        onComplete: () => {
          // Start counter animations after stats appear
          statItemsRef.current.forEach((ref, idx) => {
            const valueEl = ref.querySelector('.stat-value');
            if (valueEl) {
              const stat = posStats[idx];
              animateValue(valueEl, 0, stat.value, 1500);
            }
          });
        }
      }
    );

    // Animate CTA
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    ctaTl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-enterpriseBlue to-deepBlue text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div ref={headingRef} className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cinematic">
                Next-Generation <br />Point of Sale Systems
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/80">
                Transform your retail operations with our enterprise-grade POS solution that combines powerful features with intuitive design.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white text-enterpriseBlue font-semibold rounded-lg transition-all hover:shadow-lg"
                >
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all hover:shadow-lg"
                >
                  View Features
                </motion.button>
              </div>
            </div>
            
            <div ref={contentRef} className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/1253025/pexels-photo-1253025.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern POS System" 
                className="rounded-lg shadow-2xl w-full h-auto"
                data-animate="fade-in"
              />
              
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl text-deepBlue"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Trusted by</p>
                    <p className="text-2xl font-bold">10,000+ Businesses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-tr-full"></div>
      </div>
      
      {/* Image Grid */}
      <div ref={imageGridRef} className="py-4 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-deepBlue mb-4">Trusted by Industry Leaders</h3>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Our POS solutions power thousands of businesses across retail, hospitality, and service industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-lightBlue p-6 rounded-lg" data-animate="fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="https://www.svgrepo.com/show/508391/shop.svg" alt="RetailCorp" className="w-full h-16 object-contain" />
              <p className="mt-2 font-bold text-enterpriseBlue">RetailCorp</p>
            </div>
          </div>
          <div className="bg-lightBlue p-6 rounded-lg" data-animate="fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="https://www.svgrepo.com/show/530445/store.svg" alt="FashionHub" className="w-full h-16 object-contain" />
              <p className="mt-2 font-bold text-enterpriseBlue">FashionHub</p>
            </div>
          </div>
          <div className="bg-lightBlue p-6 rounded-lg" data-animate="fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="https://www.svgrepo.com/show/530444/restaurant.svg" alt="GourmetGroup" className="w-full h-16 object-contain" />
              <p className="mt-2 font-bold text-enterpriseBlue">GourmetGroup</p>
            </div>
          </div>
          <div className="bg-lightBlue p-6 rounded-lg" data-animate="fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="https://www.svgrepo.com/show/530443/electronics.svg" alt="TechStore" className="w-full h-16 object-contain" />
              <p className="mt-2 font-bold text-enterpriseBlue">TechStore</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div ref={featuresRef} className="py-4 bg-lightBlue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-deepBlue mb-4">Powerful Features</h3>
            <p className="text-textSecondary max-w-3xl mx-auto">
              Our comprehensive POS system includes everything you need to streamline operations and boost revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                ref={addToFeatureRefs}
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 82, 204, 0.2)" }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 tooltip tooltip-top"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-lightBlue rounded-full">
                    {feature.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-deepBlue">{feature.title}</h4>
                  
                  <p className="text-textSecondary">{feature.description}</p>
                </div>
                
                {/* Tooltip content */}
                <div className="tooltip-content">
                  <h5 className="font-bold mb-2">{feature.title}</h5>
                  <p>{feature.tooltip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Screenshots Section */}
      <div className="py-4 container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-deepBlue mb-4">Intuitive Interface</h3>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Designed for ease of use while providing powerful capabilities for enterprise operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {screenshots.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg" data-animate="fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-deepBlue mb-2">{item.title}</h4>
                <p className="text-textSecondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div ref={statsRef} className="py-8 bg-enterpriseBlue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Results</h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our clients see significant improvements in efficiency and revenue after implementing our POS solution
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {posStats.map((stat, idx) => (
              <div 
                key={idx}
                ref={addToStatRefs}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col items-center text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2 stat-value">
                  {stat.value}
                </h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div ref={ctaRef} className="py-8 container mx-auto px-4">
        <div className="bg-lightBlue rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-deepBlue mb-4">Ready to transform your business?</h3>
            <p className="text-textSecondary text-lg">
              Schedule a personalized demo to see how our POS system can be tailored to your specific business needs.
            </p>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-enterpriseBlue text-white font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
