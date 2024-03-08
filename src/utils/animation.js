import gsap from "gsap";

let popupAnimation = (componentRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    componentRef,
    {
      height: 0,
    },
    {
      height: "438px",
      duration: 0.75,
      ease: "power2.out",
    },
  );

  tl.fromTo(
    componentRef,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    },
    0,
  );

  return tl;
};

const fadeInVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerChildrenVariant = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.8 },
  },
};

export { popupAnimation, fadeInVariant, staggerChildrenVariant };
