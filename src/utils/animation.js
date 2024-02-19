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
    0
  );

  return tl;
};

export { popupAnimation };
