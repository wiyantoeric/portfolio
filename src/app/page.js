"use client";

import { popupAnimation } from "@/utils/animation";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const profileCardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(popupAnimation(profileCardRef.current));
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
