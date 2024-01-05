import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function AnimatedText({ text, size="sm" }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.fromTo(
      textElement,
      { width: 0 },
      {
        width: "100%",
        duration: 2,
        ease: "linear",
        delay: 0.5,
        onComplete: () => {
          // Animation complete
          //   gsap.to(cursorElement, { opacity: 0, duration: 0.3 }); // Hide the cursor
        },
      },
    );
  }, [text]);

  return (
    <p ref={textRef} className={`overflow-clip whitespace-nowrap bg-transparent text-${size}`}>
      {text}
    </p>
  );
}
