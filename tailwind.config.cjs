/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Width percentages
    'w-10%', 'w-20%', 'w-30%', 'w-40%', 'w-50%', 'w-60%', 'w-70%', 'w-80%', 'w-90%', 'w-100%',
    // Height percentages
    'h-10%', 'h-20%', 'h-30%', 'h-40%', 'h-50%', 'h-60%', 'h-70%', 'h-80%', 'h-90%', 'h-100%',
    // Padding and margin percentages
    'p-2p', 'p-3p', 'p-5p', 'm-2p', 'm-3p', 'm-5p',
    // Responsive variants
    'md:w-50', 'md:w-70', 'md:w-80', 'md:w-90'
  ],
  theme: {
    extend: {
      width: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      height: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      padding: {
        '2p': '2%',
        '3p': '3%',
        '5p': '5%',
      },
      margin: {
        '2p': '2%',
        '3p': '3%',
        '5p': '5%',
      },
      inset: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
      colors: {
        bgPrimary: "#FFFFFF",      // white background
        bgSection: "#F0F7FF",      // light blue section
        primary: "#0052CC",        // rich blue (enterprise blue)
        secondary: "#0747A6",      // darker blue
        accent: "#2684FF",         // bright blue accent
        highlight: "#4C9AFF",      // light blue highlight
        textPrimary: "#172B4D",    // dark text
        textSecondary: "#42526E",  // secondary text
        cardBg: "#FFFFFF",         // card background
        cardHover: "#F4F5F7",      // card hover background
        enterpriseBlue: "#0052CC", // primary enterprise blue
        deepBlue: "#091E42",       // very dark blue for contrast
        lightBlue: "#DEEBFF",      // very light blue for backgrounds
        accentBlue: "#00B8D9"      // accent blue for highlights
      },
      fontFamily: {
        cinematic: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      dropShadow: {
        neonRed: "0 0 8px #FF355E, 0 0 16px #FF355E",
        neonBlue: "0 0 8px #00FFF7, 0 0 16px #00FFF7",
        neonPurple: "0 0 8px #9D00FF, 0 0 16px #9D00FF"
      },
      animation: {
        float: "float 4s ease-in-out infinite alternate",
        flicker: "flicker 1.5s infinite"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-12px)" }
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 0.99 },
          "20%, 24%, 55%": { opacity: 0.4 }
        }
      }
    }
  },
  plugins: []
};
