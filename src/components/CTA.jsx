import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaDiscord } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-enterpriseBlue via-primary to-deepBlue text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white font-cinematic"
      >
        Transform Your Enterprise Today
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
      >
        Schedule a consultation with our enterprise solutions experts
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
        className="mt-8 px-12 py-5 bg-white text-enterpriseBlue font-bold rounded-lg text-xl transition-all hover:bg-white/90"
      >
        Request Demo
      </motion.button>

      {/* Contact Methods */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-white container mx-auto px-4">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-transform border border-white/20"
        >
          <FaEnvelope className="text-4xl mb-4 text-white" />
          <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-sm">enterprise@erpsolutions.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-transform border border-white/20"
        >
          <FaPhone className="text-4xl mb-4 text-white" />
          <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-sm">+1 (800) 555-8765</p>
        </motion.div>

        {/* Schedule Meeting */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-transform border border-white/20"
        >
          <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <h3 className="text-2xl font-semibold mb-2">Schedule Meeting</h3>
          <p className="text-sm">Book a consultation</p>
        </motion.div>
      </div>
    </section>
  );
}
