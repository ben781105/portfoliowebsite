// components/FadeInWhenVisible.js
import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({
  children,
  delay = 0,
  duration = 0.6,
  variant = "fadeUp", // fadeUp, fadeLeft, scaleUp
  once = true,
  threshold = 0.3,
  ...props
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variantMap = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, delay, ease: "easeOut" },
      },
    },
  };

  const selectedVariant = variantMap[variant] || variantMap.fadeUp;

  return (
    <Motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

export default FadeInWhenVisible;
