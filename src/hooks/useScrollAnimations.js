import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = (elementRef, options = {}) => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: '',
    message: '',
    icon: '',
  });

  const animationRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const {
      animationType = 'fadeInUp',
      duration = 0.8,
      delay = 0,
      showDialog = true,
      dialogTitle = 'Section Revealed',
      dialogMessage = 'New content is now visible',
      dialogIcon = '✨',
    } = options;

    // Animation presets
    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      fadeInDown: {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      rotateIn: {
        from: { opacity: 0, rotation: -10, scale: 0.9 },
        to: { opacity: 1, rotation: 0, scale: 1 },
      },
    };

    const animation = animations[animationType] || animations.fadeInUp;

    // Set initial state
    gsap.set(elementRef.current, animation.from);

    // Create ScrollTrigger animation
    animationRef.current = gsap.to(elementRef.current, {
      ...animation.to,
      duration,
      delay,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          if (showDialog) {
            setDialogState({
              isOpen: true,
              title: dialogTitle,
              message: dialogMessage,
              icon: dialogIcon,
            });
          }
        },
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [elementRef, options]);

  const closeDialog = () => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  return { dialogState, closeDialog };
};

export default useScrollAnimations;
