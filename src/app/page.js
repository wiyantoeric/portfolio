"use client";

import { popupAnimation } from "@/utils/animation";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import WorksCard from "@/components/WorksCard";
// import { motion, useAnimate, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const profileCardRef = useRef(null);
  const worksCardRef = useRef(null);

  // const containerRef = useRef(null);

  // const [containerOpacity, setContainerOpacity] = useState(0);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // const scaleProfile = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const scaleWorks = useTransform(scrollYProgress, [0, 1], [2, 1]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(popupAnimation(profileCardRef.current));
    tl.add(popupAnimation(worksCardRef.current));
  });

  return (
    <main className="scroll-smooth">
      <div className="my-40 flex w-screen flex-col items-center gap-y-10">
        <div ref={profileCardRef}>
          <ProfileCard />
        </div>
        <div ref={worksCardRef}>
          <WorksCard />
        </div>
      </div>
    </main>
  );
}
