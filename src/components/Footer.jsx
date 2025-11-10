import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-lightBlue via-white/5 to-deepBlue text-deepBlue py-20 px-6 overflow-hidden text-center">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 via-transparent to-neonRed/10 blur-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl mx-auto">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-enterpriseBlue"
        >
          Let’s Talk 👋
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-textSecondary text-lg leading-relaxed"
        >
          We’d love to hear from you — whether it’s a question, idea, or just to
          say hi.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-3 text-base"
        >
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-neonBlue" />
            <span>reaganm746@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-neonBlue" />
            <span>nakarvarun77@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-neonRed" />
            <span>0740 217 653 / 0769 016 743</span>
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-enterpriseBlue/40 to-transparent mt-12 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Footer bottom */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-textSecondary">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-enterpriseBlue">
            Softcore Solutions
          </span>{" "}
          — Built with ❤️ and a lot of coffee ☕.
        </p>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 text-enterpriseBlue font-semibold hover:underline mt-2 md:mt-0"
        >
          <FaArrowUp className="text-enterpriseBlue" />
          Back to Top
        </motion.button>
      </div>
    </footer>
  );
}
