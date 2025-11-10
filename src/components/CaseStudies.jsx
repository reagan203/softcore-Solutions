import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "./Tooltip";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Global Hotel Chain",
      industry: "Hospitality",
      description:
        "Implemented our hotel management suite across  properties, resulting in 35% operational efficiency improvement and 28% increase in guest satisfaction scores.",
      details:
        "This large-scale implementation involved integrating our property management, guest relations, and analytics modules. The rollout across 200 properties was completed in phases, allowing training and feedback loops that improved adoption rates significantly.",
      metrics: [
        { label: "Efficiency Increase", value: "35%" },
        { label: "Guest Satisfaction", value: "28%" },
        { label: "ROI Timeline", value: "9 months" },
      ],
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Retail Corporation",
      industry: "Retail",
      description:
        "Deployed our POS and inventory management system across 5 stores, reducing inventory costs by 22% and increasing sales by 18% through improved customer experience.",
      details:
        "Our solution unified POS, inventory, and CRM systems, giving management real-time insights into customer behavior and stock levels. This integration streamlined checkout times and improved loyalty program performance.",
      metrics: [
        { label: "Inventory Cost Reduction", value: "22%" },
        { label: "Sales Increase", value: "18%" },
        { label: "ROI Timeline", value: "12 months" },
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
    {
  id: 3,
  title: "Manufacturing Enterprise",
  industry: "Manufacturing",
  description:
    "Implemented our ERP solution for a global manufacturer, streamlining operations across 4 facilities and reducing production costs by 15% while improving quality control.",
  details:
    "The ERP integration covered finance, production, and supply chain modules. Predictive analytics reduced machine downtime and ensured just-in-time raw material procurement, saving both time and cost.",
  metrics: [
    { label: "Cost Reduction", value: "15%" },
    { label: "Quality Improvement", value: "24%" },
    { label: "ROI Timeline", value: "8 months" },
  ],
  image:
 "https://images.unsplash.com/photo-1581091758447-9fc7761b58f0?auto=format&fit=crop&w=800&q=80"
},

  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.batch(".case-card", {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: 50 }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-lightBlue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-deepBlue font-cinematic"
        >
          Success Stories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Tooltip key={study.id} content={study.industry} position="top">
              <motion.article
                className="case-card opacity-0 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 30px -10px rgba(0, 82, 204, 0.25)",
                }}
              >
                <figure className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={`${study.title} project`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </figure>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-deepBlue">{study.title}</h3>
                    <span className="text-xs font-semibold bg-lightBlue text-enterpriseBlue px-2 py-1 rounded">
                      {study.industry}
                    </span>
                  </div>

                  <p className="text-textSecondary mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-textSecondary">{m.label}</p>
                        <p className="text-enterpriseBlue font-bold">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 text-center">
                    <button
                      className="text-enterpriseBlue font-semibold hover:underline"
                      onClick={() => setSelectedStudy(study)}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.article>
            </Tooltip>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-enterpriseBlue text-white font-semibold rounded-lg transition-all hover:shadow-lg"
          >
            View All Case Studies
          </motion.button>
        </div>
      </div>

      {/* Decorative backgrounds */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-tl-full"></div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedStudy(null)}
              >
                ✕
              </button>
              <img
                src={selectedStudy.image}
                alt={selectedStudy.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 text-deepBlue">
                {selectedStudy.title}
              </h3>
              <p className="text-textSecondary mb-4">{selectedStudy.details}</p>
              <ul className="space-y-2 text-sm">
                {selectedStudy.metrics.map((m) => (
                  <li key={m.label}>
                    <strong>{m.label}:</strong> {m.value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
