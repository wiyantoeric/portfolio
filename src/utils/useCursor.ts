import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

function useMousePosition() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ clientX, clientY, currentTarget } : {
    clientX: number;
    clientY: number;
    currentTarget: Element;
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    let x = clientX - left;
    let y = clientY - top;

    mouseX.set(x);
    mouseY.set(y);
    console.log(x, y);
  }
  return { mouseX, mouseY, onMouseMove };
}

function useMousePosition2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}

export { useMousePosition, useMousePosition2 };