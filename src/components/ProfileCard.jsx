import { fadeInVariant } from "@/utils/animation";
import AnimatedBorder from "./AnimatedBorder";
import GithubIcon from "./icon/GithubIcon";
import LinkedinIcon from "./icon/LinkedinIcon";
import { motion } from "framer-motion";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function ProfileCard() {
  return (
    <motion.div
      variants={containerVariant}
      className="relative flex aspect-[7/8] w-96 flex-col bg-white p-8"
    >
      <AnimatedBorder />
      <motion.div
        variants={fadeInVariant}
        className="flex flex-col justify-start"
      >
        <p className="text-2xl">Eric Wiyanto</p>
        <p className="text-sm italic">app developer</p>
        <div className="mt-6 space-y-4">
          <p>
            Hi there, I&apos;m Eric. I&apos;m an app developer with a formal
            education in IT
          </p>
          <p>I do code and design creative website and beautiful mobile app</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-auto flex w-full gap-4"
        variants={fadeInVariant}
      >
        <a
          href="https://github.com/wiyantoeric"
          target="_blank"
          className="group relative"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform duration-100 ease-in-out group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#2D333B] p-2">
            <GithubIcon />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/ericwiyanto"
          target="_blank"
          className="group relative"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform ease-in-out group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#0A66C2] p-2">
            <LinkedinIcon />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default ProfileCard;
