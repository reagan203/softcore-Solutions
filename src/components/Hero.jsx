import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const companyNameRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollHintRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const featureCardsRef = useRef([]);

  // Reset refs arrays
  featureCardsRef.current = [];

  const addToFeatureCardsRefs = (el) => el && !featureCardsRef.current.includes(el) && featureCardsRef.current.push(el);

  const featureCards = [
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Enterprise-Grade",
      description: "Built for multi-million dollar businesses",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "High Performance",
      description: "Optimized for speed and reliability",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      title: "Cloud-Based",
      description: "Access your data from anywhere",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Background fade-in
    tl.from(bgRef.current, { opacity: 0, duration: 1.5 });

    // Text animations
    tl.from(companyNameRef.current, { opacity: 0, y: -30, duration: 0.8 }, "-=0.5")
      .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.7 }, "-=0.5")
      .from(featureCardsRef.current, { opacity: 0, y: 30, duration: 0.6, stagger: 0.2 }, "-=0.5");

    // Image & stats
    tl.from(imageRef.current, { opacity: 0, x: 50, duration: 0.8 }, "-=0.5")
      .from(statsRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5");

    // Scroll-triggered content fade
    gsap.to(contentRef.current, {
      y: 100,
      opacity: 0,
      ease: "power2.in",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
    });

    // Scroll hint bounce
    gsap.to(scrollHintRef.current, { y: 10, repeat: -1, yoyo: true, duration: 1.2, ease: "power1.inOut" });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-blue-50">
      {/* Light blue background */}
      <div ref={bgRef} className="absolute inset-0 bg-blue-50 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div ref={contentRef} className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h2 ref={companyNameRef} className="text-3xl md:text-4xl font-black text-blue-800 mb-6 tracking-wider">
              Softcore Software Solutions
            </h2>
            <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none">
              SOFTWARE<br />SOLUTIONS
            </h1>
            <p ref={subtitleRef} className="mt-10 text-2xl md:text-3xl text-gray-800 max-w-2xl font-bold">
              Transforming multi-million dollar businesses with powerful software solutions
            </p>

            {/* Feature cards - clean contrast */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((card, idx) => (
                <div 
                  key={idx} 
                  ref={addToFeatureCardsRefs} 
                  className="bg-white p-8 rounded-2xl text-center border-4 border-blue-500 shadow-2xl hover:shadow-2xl hover:border-blue-600 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-6 bg-blue-100 p-4 rounded-full border-4 border-blue-500">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-base text-gray-700 font-medium">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div ref={imageRef} className="lg:w-1/2 relative mt-16 lg:mt-0 lg:pl-16">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Enterprise Solutions"
              className="rounded-2xl w-full h-auto object-cover border-4 border-blue-500 shadow-2xl"
            />
            <div ref={statsRef} className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl border-4 border-blue-500 shadow-2xl flex space-x-12">
              <div className="text-center">
                <p className="text-lg font-black text-gray-900 mb-3">Success Rate</p>
                <p className="text-4xl font-black text-blue-600">99.8%</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-gray-900 mb-3">Client Retention</p>
                <p className="text-4xl font-black text-blue-600">95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}