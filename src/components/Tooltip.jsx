import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionStyles = () => {
    const baseStyle = {
      position: 'absolute',
      zIndex: 50,
      pointerEvents: 'none',
    };

    switch (position) {
      case 'top':
        return {
          ...baseStyle,
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px',
        };
      case 'bottom':
        return {
          ...baseStyle,
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '8px',
        };
      case 'left':
        return {
          ...baseStyle,
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: '8px',
        };
      case 'right':
        return {
          ...baseStyle,
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: '8px',
        };
      default:
        return baseStyle;
    }
  };

  const getArrowStyles = () => {
    const arrowColor = 'rgb(17, 24, 39)';
    const arrowSize = '6px';

    switch (position) {
      case 'top':
        return {
          bottom: `-${arrowSize}`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid transparent`,
          borderTop: `${arrowSize} solid ${arrowColor}`,
        };
      case 'bottom':
        return {
          top: `-${arrowSize}`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid ${arrowColor}`,
        };
      case 'left':
        return {
          right: `-${arrowSize}`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid transparent`,
          borderLeft: `${arrowSize} solid ${arrowColor}`,
        };
      case 'right':
        return {
          left: `-${arrowSize}`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid ${arrowColor}`,
        };
      default:
        return {};
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            style={getPositionStyles()}
          >
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm whitespace-nowrap relative">
              {content}
              {/* Arrow pointer */}
              <div
                className="absolute w-0 h-0"
                style={{
                  ...getArrowStyles(),
                  position: 'absolute',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
