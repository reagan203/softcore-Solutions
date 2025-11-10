import React, { useEffect, useState } from 'react';

const FloatingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom floating arrow cursor */}
      <div
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: 'translate(-4px, -4px)',
            filter: 'drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8))',
          }}
        >
          {/* Simple clean arrow cursor */}
          <polygon points="0,0 0,24 6,18 14,28 20,22 12,12 22,12 0,0" fill="black" />
          <polygon points="0,0 0,24 6,18 14,28 20,22 12,12 22,12 0,0" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
};

export default FloatingCursor;
