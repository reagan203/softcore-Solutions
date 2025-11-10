import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP globally
export const initGSAP = () => {
  // Set defaults
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8
  });
  
  // Clear any existing ScrollTriggers to prevent duplicates
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Add a small delay to ensure DOM is ready
  setTimeout(() => {
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, 100);
};

// Animate elements when they enter viewport
export const animateOnScroll = (elements, animation = {}, options = {}) => {
  if (!elements || elements.length === 0) return;
  
  const defaultAnimation = {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2
  };
  
  const defaultOptions = {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  };
  
  const mergedAnimation = { ...defaultAnimation, ...animation };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      ...mergedAnimation,
      scrollTrigger: {
        trigger: Array.isArray(elements) ? elements[0] : elements,
        ...mergedOptions
      }
    }
  );
};

// Create a parallax effect
export const createParallax = (element, options = {}) => {
  if (!element) return;
  
  const defaultOptions = {
    start: "top bottom",
    end: "bottom top",
    scrub: true
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return gsap.to(element, {
    y: options.distance || -100,
    scrollTrigger: {
      trigger: element,
      ...mergedOptions
    }
  });
};

// Animate counter
export const animateCounter = (element, endValue, duration = 1.5) => {
  if (!element) return;
  
  let startValue = 0;
  const isPercentage = String(endValue).includes('%');
  const isPlus = String(endValue).includes('+');
  
  // Extract numeric value
  const numericValue = parseFloat(String(endValue).replace(/[^0-9.]/g, ''));
  
  gsap.to(element, {
    innerHTML: numericValue,
    duration: duration,
    snap: { innerHTML: 1 },
    onUpdate: function() {
      let currentValue = Math.round(this.targets()[0].innerHTML);
      let displayValue = currentValue;
      
      if (isPercentage) {
        displayValue = currentValue + '%';
      }
      
      if (isPlus) {
        displayValue = currentValue + '+';
      }
      
      this.targets()[0].innerHTML = displayValue;
    }
  });
};

// Ensure animations run on page load
export const runPageLoadAnimations = () => {
  // Animate all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  animatedElements.forEach(element => {
    const animationType = element.getAttribute('data-animate');
    
    switch(animationType) {
      case 'fade-in':
        gsap.fromTo(element, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.8, delay: 0.2 }
        );
        break;
      case 'slide-up':
        gsap.fromTo(element, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        );
        break;
      case 'slide-in-left':
        gsap.fromTo(element, 
          { opacity: 0, x: -50 }, 
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
        );
        break;
      case 'slide-in-right':
        gsap.fromTo(element, 
          { opacity: 0, x: 50 }, 
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
        );
        break;
      case 'scale-in':
        gsap.fromTo(element, 
          { opacity: 0, scale: 0.8 }, 
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.2 }
        );
        break;
      default:
        gsap.fromTo(element, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.8, delay: 0.2 }
        );
    }
  });
};
