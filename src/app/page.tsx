"use client";

import { useEffect, useRef, useState } from "react";
import initiateLenis from "@/utils/initiateLenis";
import { motion, useScroll } from "framer-motion";
import "../styles/home.scss";
import RevealText from "@/components/old/RevealText";
import dynamic from "next/dynamic";
import WorkContainer from "@/components/new/WorkContainer";
import ProfileContainer from "@/components/new/ProfileContainer";

const ThemeToggle = dynamic(() => import("@/components/new/ThemeToggle"));

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    initiateLenis();
  });

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 top-[10%] max-w-[400px] -translate-x-1/2 pb-40 transition-colors duration-500 dark:text-white dark:text-opacity-95"
    >
      <div className="mt-4 flex flex-col gap-12">
        <Bar direction="right" />

        {/* Profile section */}
        <ProfileContainer />

        <Bar sticky={true} direction="left" />

        {/* Works section */}
        <WorkContainer />
      </div>
    </div>
  );

  // Scroll Bar with scaleX Animation
  function Bar({
    direction,
    sticky = false,
  }: {
    direction: "right" | "left";
    sticky?: boolean;
  }) {
    return (
      <motion.div
        className={`h-fit w-full origin-${direction} ${
          sticky ? "sticky" : ""
        } top-0`}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: {
            delay: 1,
            duration: 1,
          },
        }}
      >
        <motion.div
          className={`origin-${direction} h-1 w-full bg-black dark:bg-white`}
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
      </motion.div>
    );
  }
}

export default Home;
