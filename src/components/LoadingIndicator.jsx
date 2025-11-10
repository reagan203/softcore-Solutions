// import React from 'react';
// import { motion } from 'framer-motion';

// const LoadingIndicator = () => {
//   // Dots animation variants
//   const containerVariants = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const dotVariants = {
//     initial: { y: 0, opacity: 0.2 },
//     animate: { 
//       y: [-10, 0, -10],
//       opacity: [0.2, 1, 0.2],
//       transition: { 
//         repeat: Infinity, 
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <div className="h-80 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-inner">
//       <div className="flex flex-col items-center">
//         {/* Logo */}
//         <div className="mb-6 flex items-center">
//           <div className="w-12 h-12 bg-enterpriseBlue rounded-md flex items-center justify-center mr-3">
//             <span className="text-white font-bold text-xl">S</span>
//           </div>
//           <span className="text-enterpriseBlue font-bold text-xl">Softcore Solutions</span>
//         </div>
        
//         {/* Animated dots */}
//         <motion.div 
//           className="flex space-x-3 mb-4"
//           variants={containerVariants}
//           initial="initial"
//           animate="animate"
//         >
//           {[0, 1, 2, 3, 4].map((i) => (
//             <motion.div
//               key={i}
//               className="w-3 h-3 rounded-full bg-enterpriseBlue"
//               variants={dotVariants}
//             />
//           ))}
//         </motion.div>
        
//         <p className="text-enterpriseBlue font-medium text-lg">Loading your experience</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingIndicator;
