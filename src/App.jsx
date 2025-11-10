import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import SplashScreen from "./components/SplashScreen";
import FloatingCursor from "./components/FloatingCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
/* eslint-disable no-unused-vars */


// Lazy load components for better performance
const FeatureSection = lazy(() => import("./components/FeatureSection"));
const Services = lazy(() => import("./components/Services"));
const ParallaxSection = lazy(() => import("./components/ParallaxSection"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingNeon = lazy(() => import("./components/FloatingNeon"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const EnterpriseServices = lazy(() => import("./components/EnterpriseServices"));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  // Refs for scrolling
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const enterpriseRef = useRef(null);
  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);

  // Main container ref for GSAP animations
  const mainContainerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Home");
  const [loading, setLoading] = useState(true);

  // Smooth scroll
  const scrollToSection = (ref) => {
    if (ref.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: ref.current, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  // Initialize GSAP animations
  useEffect(() => {
    const masterTl = gsap.timeline();
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Track active section
  useEffect(() => {
    const sections = [
      { ref: heroRef, name: "Home" },
      { ref: solutionsRef, name: "Solutions" },
      { ref: enterpriseRef, name: "Enterprise" },
      { ref: servicesRef, name: "Services" },
      { ref: caseStudiesRef, name: "Case Studies" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.ref.current === entry.target);
            if (section) setActiveSection(section.name);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));
    return () =>
      sections.forEach((s) => s.ref.current && observer.unobserve(s.ref.current));
  }, []);

  return (
    <>
      <FloatingCursor />
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}

      <div
        ref={mainContainerRef}
        className={`transition-colors duration-700 bg-gradient-animate font-sans text-textPrimary relative overflow-x-hidden ${
          loading ? "hidden" : ""
        }`}
        style={{ minHeight: "100vh" }}
      >
        {/* Navbar */}
        <Navbar
          onLinkClick={{
            Home: () => scrollToSection(heroRef),
            Solutions: () => scrollToSection(solutionsRef),
            Enterprise: () => scrollToSection(enterpriseRef),
            Services: () => scrollToSection(servicesRef),
            "Case Studies": () => scrollToSection(caseStudiesRef),
          }}
        />

        {/* Hero Section */}
        <section ref={heroRef}>
          <Hero />
        </section>

        {/* Floating Neon */}
        <Suspense fallback={<div className="h-0"></div>}>
          <FloatingNeon />
        </Suspense>

        {/* Solutions Section */}
        <section ref={solutionsRef} className="py-16 px-8 bg-lightBlue">
          <Suspense fallback={<div className="h-40 bg-lightBlue"></div>}>
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center text-deepBlue font-cinematic">
                Enterprise Solutions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureSection
                  title="Integrated ERP Systems"
                  description="Comprehensive enterprise resource planning solutions that unify your business operations."
                  imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                />
                <FeatureSection
                  title="Business Intelligence"
                  description="Advanced analytics and reporting tools that provide actionable insights for strategic decision-making."
                  imgUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                />
                <FeatureSection
                  title="Cloud Infrastructure"
                  description="Secure, scalable cloud solutions that grow with your enterprise needs."
                  imgUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </Suspense>
        </section>

        {/* Enterprise Solutions Section */}
        <section ref={enterpriseRef}>
          <Suspense fallback={<div className="h-40 bg-lightBlue"></div>}>
            <div className="py-16 bg-lightBlue text-center">
              <h2 className="text-4xl font-bold mb-6 text-deepBlue">
                Software Solutions
              </h2>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto px-4">
                Our comprehensive software solutions integrate all facets of
                your business into one cohesive system.
              </p>
            </div>
          </Suspense>
        </section>

        {/* Parallax Divider */}
        <Suspense fallback={<div className="h-40 bg-bgSection"></div>}>
          <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1600&q=70"
            text="Software Solutions That Scale With Your Business"
          />
        </Suspense>

        {/* Enterprise Services Section */}
        <section ref={servicesRef}>
          <Suspense fallback={<div className="h-40 bg-white"></div>}>
            <EnterpriseServices />
          </Suspense>
        </section>

        {/* Case Studies Section */}
        <section ref={caseStudiesRef}>
          <Suspense fallback={<div className="h-40 bg-lightBlue"></div>}>
            <CaseStudies />
          </Suspense>
        </section>

        {/* Footer (Added here) */}
        <Suspense fallback={<div className="h-40 bg-bgPrimary"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
