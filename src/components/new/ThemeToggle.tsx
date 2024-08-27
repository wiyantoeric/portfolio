import useTheme from "@/utils/useTheme";
import { motion, useAnimate } from "framer-motion";
import React from "react";
import BrightnessIcon from "../icon/BrightnessIcon";

function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const [splashRef, animate] = useAnimate();

  // Animate backdrop in timeline
  const animateSplash = async () => {
    // Expands backdrop
    await animate(
      splashRef.current,
      {
        scale: 1.7,
        opacity: 0,
      },
      { duration: 0.8, ease: "easeOut" },
    );
    // Reset backdrop scale
    await animate(
      splashRef.current,
      {
        scale: 0,
      },
      { duration: 0 },
    );
    // Reset backdrop opacity
    await animate(
      splashRef.current,
      {
        opacity: 1,
      },
      { duration: 0 },
    );
  };

  const onToggleClick = () => {
    animateSplash();
    toggleTheme();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 4.5, duration: 0.75, ease: "easeOut" },
      }}
      onAnimationComplete={animateSplash}
      className="group relative cursor-pointer"
    >
      {/* Splash container, animated on toggle-theme button click */}
      <div
        ref={splashRef}
        className="absolute left-0 top-0 -z-10 h-full w-full scale-100 bg-black dark:bg-white"
      ></div>
      {/* Toggle-theme button */}
      <div
        className="bg-black duration-500 dark:bg-white"
        onClick={onToggleClick}
        aria-label="Toggle theme"
      >
        <BrightnessIcon light={theme === "light"} />
      </div>
    </motion.div>
  );
}

export default ThemeToggle;
