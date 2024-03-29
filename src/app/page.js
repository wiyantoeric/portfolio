"use client";

import { fadeInVariant, staggerChildrenVariant } from "@/utils/animation";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import WorksCard from "@/components/WorksCard";
import { motion, useAnimate } from "framer-motion";
import initiateLenis from "@/utils/initiateLenis";

export default function Home() {
  useEffect(() => {
    initiateLenis();
  });

  return (
    <main>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildrenVariant}
        className="my-40 flex w-screen flex-col items-center gap-y-10"
      >
        <motion.div variants={fadeInVariant}>
          <ProfileCard />
        </motion.div>
        <motion.div variants={fadeInVariant}>
          <WorksCard />
        </motion.div>
      </motion.div>
    </main>
  );
}
