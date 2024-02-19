"use client";

import { popupAnimation } from "@/utils/animation";
import AnimatedText from "@/components/AnimatedText";
import BorderedContainer from "@/components/BorderedContainer";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import WorksCard from "@/components/WorksCard";

export default function Home() {
  const profileCardRef = useRef(null);
  const cardRefBottom = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(popupAnimation(profileCardRef.current));
    tl.add(popupAnimation(cardRefBottom.current), "-=0.5");
  }, []);

  return (
    <main className="scroll-smooth">
      <div className="my-40 flex w-screen flex-col items-center gap-y-10">
        <div ref={profileCardRef}>
          <ProfileCard />
        </div>
        
      </div>
    </main>
  );
}
