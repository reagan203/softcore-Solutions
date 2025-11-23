import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom eCommerce Stores",
      desc: "Tailored online stores that captivate your audience and drive conversions with intuitive user experiences.",
      icon: (
        <svg className="w-10 h-10 text-[#003366] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      )
    },
    {
      title: "Payment Gateways & Security",
      desc: "Seamless, secure global transactions with multiple payment options and advanced fraud protection.",
      icon: (
        <svg className="w-10 h-10 text-[#003366] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Real-Time Analytics",
      desc: "Track performance with actionable insights, helping you make data-driven decisions to grow your business.",
      icon: (
        <svg className="w-10 h-10 text-[#003366] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#003366] mb-3 font-cinematic">
          Our Services
        </h2>

        <div className="h-1 w-20 bg-[#003366] mx-auto rounded-md mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200 transition-all flex flex-col"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#003366] text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base flex-grow">
                {service.desc}
              </p>

              <div className="mt-6 mx-auto text-[#003366] font-medium text-sm hover:underline cursor-pointer">
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
