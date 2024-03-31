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

const borderHVariant = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const borderVVariant = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export { fadeInVariant, borderHVariant, borderVVariant };
