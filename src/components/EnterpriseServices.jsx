import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseServices() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  // Reset refs array
  cardRefs.current = [];

  // Add to refs array
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // Enterprise services data
  const services = [
    {
      title: "Supply Chain Management",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
        </svg>
      ),
      description: "End-to-end supply chain management solutions that optimize inventory, logistics, and procurement processes.",
      features: ["Inventory Optimization", "Logistics Management", "Supplier Integration", "Demand Forecasting"],
      tooltip: "Our SCM solution integrates with your existing ERP system to provide real-time visibility across your entire supply chain, reducing costs by an average of 18% and improving fulfillment rates by 24%."
    },
    {
      title: "Financial Management",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      description: "Comprehensive financial management tools for accounting, reporting, and financial analysis.",
      features: ["General Ledger", "Accounts Payable/Receivable", "Financial Reporting", "Tax Management"],
      tooltip: "Our financial management suite provides enterprise-grade accounting capabilities with advanced reporting tools that help CFOs make data-driven decisions and reduce financial close times by up to 70%."
    },
    {
      title: "Human Resources",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      description: "Complete HR management system for employee data, payroll, benefits, and performance tracking.",
      features: ["Payroll Processing", "Benefits Administration", "Performance Management", "Recruitment"],
      tooltip: "Our HR solution streamlines workforce management with automated payroll processing, performance tracking, and recruitment tools that reduce administrative workload by 35% and improve employee satisfaction."
    },
    {
      title: "Customer Relationship Management",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
      description: "Advanced CRM tools to manage customer interactions, sales pipelines, and marketing campaigns.",
      features: ["Contact Management", "Sales Automation", "Marketing Integration", "Customer Support"],
      tooltip: "Our enterprise CRM system helps you build stronger customer relationships with AI-powered insights, automated workflows, and seamless integration with your marketing and support systems, increasing customer retention by 22%."
    },
    {
      title: "Business Intelligence",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      description: "Powerful analytics and reporting tools to transform data into actionable business insights.",
      features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Real-time Reporting"],
      tooltip: "Our BI platform leverages AI and machine learning to deliver predictive insights and interactive visualizations that help executives identify trends, optimize operations, and make strategic decisions with confidence."
    },
    {
      title: "Manufacturing Execution System",
      icon: (
        <svg className="w-12 h-12 text-enterpriseBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      description: "Specialized MES solutions for production planning, quality control, and shop floor management.",
      features: ["Production Scheduling", "Quality Management", "Equipment Monitoring", "Work Order Tracking"],
      tooltip: "Our MES solution provides real-time visibility into manufacturing operations, helping you optimize production schedules, reduce downtime by 15%, and ensure consistent product quality across multiple facilities."
    }
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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    
    // Animate cards
    .fromTo(
      cardRefs.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
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
      className="py-16 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-4xl font-bold text-deepBlue font-cinematic mb-4">
            Enterprise Solutions <span className="heading-highlight">Ecosystem</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Our comprehensive suite of enterprise applications work seamlessly together to power your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Tooltip key={idx} content={service.tooltip} position="top">
              <motion.div
                ref={addToCardRefs}
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 82, 204, 0.2)" }}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 cursor-help"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-lightBlue rounded-full">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-deepBlue">{service.title}</h3>
                  
                  <p className="text-textSecondary mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 w-full mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center">
                        <svg className="w-4 h-4 text-enterpriseBlue mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="px-6 py-2 bg-enterpriseBlue text-white rounded-lg hover:bg-primary transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-lightBlue opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-accent opacity-10 rounded-tr-full"></div>
    </section>
  );
}
