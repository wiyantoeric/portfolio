"use client";

import { fadeInVariant, staggerChildrenVariant } from "@/utils/animation";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import WorksCard from "@/components/WorksCard";
import { motion, useAnimate } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
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
