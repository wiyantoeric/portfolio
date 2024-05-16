import { motion } from "framer-motion";

function RevealText({
  text,
  className,
  duration = 0.85,
  delay = 0,
  ease = "circOut",
}) {
  return (
    <div className="overflow-hidden">
      <motion.p
        inherit={false}
        initial={{
          y: "100%",
        }}
        animate={{
          y: "0%",
          transition: {
            duration: duration,
            ease: ease,
            delay: delay,
          },
        }}
        className={`inline-block ${className}`}
      >
        {text}
      </motion.p>
    </div>
  );
}

export default RevealText;
