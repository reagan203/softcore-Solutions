import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar({ onLinkClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);

  // Updated links for enterprise ERP solutions
  const links = ["Home", "Solutions", "Enterprise", "Services", "Case Studies"];

  // Reset refs array
  menuItemsRef.current = [];

  // Add or remove refs from the array
  const addToRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animation for navbar
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      logoRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
    );

    gsap.fromTo(
      menuItemsRef.current,
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1,
        ease: "power3.out", 
        delay: 1 
      }
    );
  }, []);

  // Animation for mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 shadow-lg backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0, 82, 204, 0.95)' }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo on the left */}
          <div 
            ref={logoRef}
            className="text-xl md:text-2xl font-bold text-white font-cinematic cursor-pointer" 
            onClick={onLinkClick.Home}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center mr-3">
                <span className="text-enterpriseBlue font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold">Softcore Solutions</span>
            </div>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:block flex-grow text-center">
            <ul className="inline-flex gap-10 justify-center">
              {links.map((link, idx) => (
                <li
                  key={idx}
                  ref={addToRefs}
                  className="cursor-pointer text-white font-medium relative group hover:text-white/80 text-lg"
                  onClick={onLinkClick[link]}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder div for balance */}
          <div className="hidden md:block w-10 h-10"></div>
          
          {/* Mobile Menu Button */}
          <div 
            className="md:hidden cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-16 left-0 w-full shadow-lg z-40 overflow-hidden h-0 opacity-0 md:hidden"
        style={{ backgroundColor: '#0052cc' }}
      >
        <ul className="flex flex-col p-4 container mx-auto">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-white font-medium py-3 border-b border-white/10 hover:bg-blue-500 px-4 transition-all"
              onClick={() => {
                onLinkClick[link]();
                setMobileMenuOpen(false);
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
