"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import WorksCard from "@/components/WorksCard";
import { motion } from "framer-motion";
import initiateLenis from "@/utils/initiateLenis";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 2.5, // 2.2 (border animation duration) + 0.3 delay
    },
  },
};

export default function Home() {
  useEffect(() => {
    initiateLenis();
  });

  return (
    <main>
      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariant}
        className="my-40 flex w-screen flex-col items-center gap-y-10"
      >
        <ProfileCard />
        <WorksCard />
      </motion.div>
    </main>
  );
}
