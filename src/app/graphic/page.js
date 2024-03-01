"use client";

import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

function GraphicPage() {
  const targetSectionRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    const elementWidth =
      targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
    targetSectionRef.current.style.width = `${elementWidth}px`;

    const width = window.innerWidth - elementWidth;
    const ratio = `${(elementWidth / window.innerHeight) * 100}%`;
    tl.to(targetSectionRef.current, { x: width }, "<");

    ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top top",
      end: ratio,
      scrub: 0,
      pin: true,
      animation: tl,
      pinSpacing: "margin",
      onToggle: (self) => console.log("toggled, isActive:", self.isActive),
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [targetSectionRef]);

  return (
    <main className="scroll-smooth">
      <div ref={mainRef} className="h-screen">
        ape
      </div>
      <div
        ref={targetSectionRef}
        className="section-container container relative flex w-full select-none flex-col justify-center"
      >
        <div className="project-wrapper grid w-fit snap-x snap-mandatory scroll-pl-6 auto-cols-max grid-flow-col">
          <div className="h-screen w-screen bg-red-300">one</div>
          <div className="h-screen w-screen bg-red-300">two</div>
          <div className="h-screen w-screen bg-red-300">three</div>
        </div>
      </div>
      <div>ppp</div>
    </main>
  );
}

export default GraphicPage;
