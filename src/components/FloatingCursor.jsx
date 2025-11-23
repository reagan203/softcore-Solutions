import React, { useEffect, useRef } from "react";

const FloatingCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursorRef.current.style.opacity = 1;
    };

    const handleMouseLeave = () => {
      cursorRef.current.style.opacity = 0;
    };

    const animate = () => {
      // Increased lerp factor from 0.15 to 0.35 for faster response
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.35);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.35);
      cursorRef.current.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Custom floating cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "32px",
          height: "32px",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transform: "translate3d(0,0,0)",
          transition: "opacity 0.2s ease-out", // Removed transform transition
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
          }}
        >
          <polygon
            points="0,0 0,24 6,18 14,28 20,22 12,12 22,12 0,0"
            fill="url(#gradient)"
          />
          <polygon
            points="0,0 0,24 6,18 14,28 20,22 12,12 22,12 0,0"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default FloatingCursor;
