import { fadeInVariant } from "@/utils/animation";
import AnimatedBorder from "./AnimatedBorder";
import GithubIcon from "./icon/GithubIcon";
import LinkedinIcon from "./icon/LinkedinIcon";
import { delay, motion } from "framer-motion";
import RevealText from "./RevealText";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

const delayVariant = {
  animate: {
    transition: {
      delayChildren: 2,
    },
  },
};

const charAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "anticipate",
    },
  },
};

const wordAnimation = {
  initial: { y: "100%" },
  animate: ([index, delay]) => ({
    y: "0%",
    transition: { delay: index * 0.1 + delay, ease: "circOut" },
  }),
};

const staggerChildren = (duration, delay) => {
  return {
    initial: {},
    animate: {
      transition: { delayChildren: delay, staggerChildren: duration },
    },
  };
};

function ProfileCard() {
  const intro1 = Array.from(
    "Hi there, I'm Eric. I'm an app developer with a formal education in IT",
  );

  const intro2 = Array.from(
    "I do code and design creative website and beautiful mobile app",
  );

  return (
    <motion.div
      variants={containerVariant}
      className="relative flex aspect-[7/8] w-96 flex-col bg-white p-8"
    >
      <AnimatedBorder />
      <motion.div
        inherit={false}
        initial="initial"
        animate="animate"
        variants={containerVariant}
        className="flex flex-col justify-start"
      >
        <RevealText text="Eric Wiyanto" delay={0.55} className="text-2xl" />
        <RevealText
          text="app developer"
          delay={1.25}
          className="text-sm italic"
        />

        <div className="mt-6 flex flex-wrap">
          {"Hi there, I'm Eric. I'm an app developer with a formal education in IT"
            .split(" ")
            .map((word, index) => (
              <>
                <motion.div
                  initial="initial"
                  animate="animate"
                  className="overflow-hidden"
                  variants={delayVariant}
                >
                  <motion.p
                    variants={wordAnimation}
                    key={index}
                    custom={[index, 1.75]}
                  >
                    {word}
                  </motion.p>
                </motion.div>
                <span>&nbsp;</span>
              </>
            ))}
        </div>
        <div className="mt-6 flex flex-wrap">
          {"I do code and design creative website (NextJs) and mobile app (Flutter)"
            .split(" ")
            .map((word, index) => (
              <>
                <motion.div
                  initial="initial"
                  animate="animate"
                  className="overflow-hidden"
                  variants={delayVariant}
                >
                  <motion.p
                    variants={wordAnimation}
                    key={index}
                    custom={[index, 3.25]}
                  >
                    {word}
                  </motion.p>
                </motion.div>
                <span>&nbsp;</span>
              </>
            ))}
        </div>
        {/* <motion.div
          inherit={false}
          initial="initial"
          animate="animate"
          variants={staggerChildren(intro1.length * 0.035, 1)}
          className="mt-6 space-y-4"
        >
          <motion.div
            variants={staggerChildren(0.035, 0)}
            className="font-inconsolata"
          >
            {intro1.map((char, index) => {
              return (
                <motion.span variants={charAnimation} key={index}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
          <motion.div
            variants={staggerChildren(0.035, 0)}
            className="font-inconsolata"
          >
            {intro2.map((char, index) => {
              return (
                <motion.span variants={charAnimation} key={index}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div> */}
      </motion.div>

      <motion.div
        className="mt-auto flex w-full gap-4"
        variants={fadeInVariant}
      >
        <a
          href="https://github.com/wiyantoeric"
          target="_blank"
          className="group relative"
          title="Eric Wiyanto's GitHub Profile"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#2D333B] p-2">
            <GithubIcon />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/ericwiyanto"
          target="_blank"
          className="group relative"
          title="Eric Wiyanto's Linkedin Profile"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform duration-200 ease-out  group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#0A66C2] p-2">
            <LinkedinIcon />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default ProfileCard;
