import { motion, stagger } from "framer-motion";

const borderHVariant = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.55,
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
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};

const delay = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

function AnimatedBorder() {
  return (
    <motion.div variants={delay}>
      <motion.div
        variants={borderHVariant}
        className="absolute left-0 top-0 h-[1.5px] w-full origin-left bg-black"
      ></motion.div>
      <motion.div
        variants={borderVVariant}
        className="absolute right-0 top-0 h-full w-[1.5px] origin-top bg-black"
      ></motion.div>
      <motion.div
        variants={borderHVariant}
        className="absolute bottom-0 right-0 h-[1.5px] w-full origin-right bg-black"
      ></motion.div>
      <motion.div
        variants={borderVVariant}
        className="absolute bottom-0 left-0 h-full w-[1.5px] origin-bottom bg-black"
      ></motion.div>
    </motion.div>
  );
}

export default AnimatedBorder;
