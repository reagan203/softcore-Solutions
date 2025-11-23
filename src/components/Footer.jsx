import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaArrowUp, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export default function Footer() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setShowEmailModal(true);
  };

  const handleEmailClientSelect = (client) => {
    let mailtoUrl = "";
    
    switch (client) {
      case "gmail":
        mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedEmail}`;
        break;
      case "outlook":
        mailtoUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${selectedEmail}`;
        break;
      case "yahoo":
        mailtoUrl = `https://compose.mail.yahoo.com/?to=${selectedEmail}`;
        break;
      case "apple":
        mailtoUrl = `mailto:${selectedEmail}`;
        break;
      case "default":
      default:
        mailtoUrl = `mailto:${selectedEmail}`;
        break;
    }

    window.open(mailtoUrl, "_blank");
    setShowEmailModal(false);
    setSelectedEmail("");
  };

  const emailClients = [
    { name: "Gmail", value: "gmail", color: "bg-red-500 hover:bg-red-600" },
    { name: "Outlook", value: "outlook", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Yahoo Mail", value: "yahoo", color: "bg-purple-500 hover:bg-purple-600" },
    { name: "Apple Mail", value: "apple", color: "bg-gray-500 hover:bg-gray-600" },
    { name: "Default Email", value: "default", color: "bg-green-500 hover:bg-green-600" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-white via-lightBlue/10 to-enterpriseBlue text-deepBlue py-12 px-6">
        {/* Subtle animated glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-enterpriseBlue/5 via-transparent to-neonBlue/5 blur-xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-enterpriseBlue">Softcore Solutions</h3>
            <p className="text-sm text-textSecondary mt-3 leading-relaxed">
              Delivering intelligent software solutions that empower businesses
              to operate efficiently and scale confidently.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-enterpriseBlue mb-2">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-neonBlue" />
                <button 
                  onClick={() => handleEmailClick("reaganm746@gmail.com")}
                  className="hover:text-enterpriseBlue hover:underline transition-colors duration-200"
                >
                  reaganm746@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-neonBlue" />
                <button 
                  onClick={() => handleEmailClick("nakarvarun77@gmail.com")}
                  className="hover:text-enterpriseBlue hover:underline transition-colors duration-200"
                >
                  nakarvarun77@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-neonRed" />
                0740 217 653 / 0769 016 743
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-enterpriseBlue" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            {/* Empty div for layout consistency */}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-enterpriseBlue/30 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-sm text-textSecondary gap-4">
          <p>
            © {new Date().getFullYear()} Softcore Solutions. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-enterpriseBlue font-medium hover:underline"
          >
            <FaArrowUp className="text-enterpriseBlue" />
            Back to Top
          </motion.button>
        </div>
      </footer>

      {/* Email Client Selection Modal */}
      {showEmailModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Choose Email Client</h3>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              How would you like to email <span className="font-semibold text-blue-600">{selectedEmail}</span>?
            </p>

            <div className="space-y-3">
              {emailClients.map((client) => (
                <button
                  key={client.value}
                  onClick={() => handleEmailClientSelect(client.value)}
                  className={`w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${client.color}`}
                >
                  {client.name}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowEmailModal(false)}
                className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}